   let strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
   let noSpecial = strings.slice(0,62);
      const passwordPara = document.getElementById('password');
      const includeRadio = document.getElementById('include');
      const excludeRadio = document.getElementById('exclude');
      const button = document.getElementById('btn')

      function generatePassword() {
        const includeSpecialChars = includeRadio;
        const excludeSpecialChars = excludeRadio;
        const passwordLength = 8;
        let password = '';

        for (let x = 0; x < passwordLength; x++) {
          let Numbers = Math.floor(Math.random() * strings.length);
          let characters = strings[Numbers];

         if (includeSpecialChars.checked) {
          password += characters
         }
       else if (excludeSpecialChars.checked) {
        Numbers = Math.floor(Math.random() * noSpecial.length);
        characters = noSpecial[Numbers];
    }
         password += characters;
        }

        passwordPara.textContent = password;
      }
      btn.addEventListener('click', generatePassword)