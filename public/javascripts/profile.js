// When user clicks the edit button 
$(".top").on("click", '#editsettings', (e)=> {

        $('#editsettings').html('<img class="save" src="/images/tick-light.png" alt="" srcset=""  width="25" height="25" >')
        let company = $('.company p'),
        school = $('.school p'),
        bio = $('.bio p'),
        email = $('.email p'),
        gender = $('.gender p')
        age = $('h4 .age')
        
        // Target all the changeable properties
        $('.company').append('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="company">Company</label><input type="text" class="form-control" id="companyInput" value="'+ company.text() +'"></div>')
        company.remove()
        $('.school').append('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="school">School</label><input type="text" class="form-control" id="schoolInput" value="'+ school.text() +'"></div>')
        school.remove()
        $('.bio').append('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="bio">About me</label><textarea class="form-control" id="bioInput" rows="3">'+ bio.text() +'</textarea></div>')
        bio.remove()
        $('.email').append('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="email">Email address</label><input type="email" class="form-control" id="emailInput" value="'+ email.text() +'"></div>')
        email.remove()
        $('.gender').append('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="gender">Gender</label><select class="form-control" id="genderInput"><option>Male</option><option>Female</option><option>Both</option></select></div>')
        gender.remove()
        age.html('<div class="form-group"><label class="col-sm-2 col-form-label col-form-label-sm" for="age">Age</label><input type="text" class="form-control" id="ageInput" value="'+ age.text() +'"></div>')
})

$('.top').on('click', '.save', () => {

        let companyInput = $('#companyInput').val().trim(),
                schoolInput = $('#schoolInput').val().trim(),
                bioInput = $('#bioInput').val().trim(),
                emailInput = $('#emailInput').val().trim(),
                genderInput = $('#genderInput').val().trim()
                ageInput = $('#ageInput').val()

        let profileData = {
                company: companyInput,
                school: schoolInput,
                bio: bioInput,
                email: emailInput,
                gender: genderInput,
                age: ageInput
        }

        console.log(profileData);

        // Call to update our data
  $.ajax({
        method: "PUT",
        url: "/user/profile/edit",
        data: profileData
      })
      .then(function() {
          window.location.reload();
      });
        
})

