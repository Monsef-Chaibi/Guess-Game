let value="";
function Value()
{
 value= document.getElementById("Numero").value;
}
  
  let randomNumber = generateRandomNumber(); 

  function generateRandomNumber() {
    let availableDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    for (let i = availableDigits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableDigits[i], availableDigits[j]] = [availableDigits[j], availableDigits[i]];
    }
  
    const randomFourDigitNumber = availableDigits.slice(0, 4).join('');
    console.log(randomFourDigitNumber);
    return randomFourDigitNumber;
  }
  let limit = 0;
  function checkGuess() {
    if(limit<10)
    {
    const guess = value;
  
    if (guess.length !== 4 || isNaN(Number(guess))) {

        Swal.fire("Info !", "Please enter 4 number ", "info");
        return;
    }
  
    let correctPosition = 0;
    let correctNumber = 0;
  
    for (let i = 0; i < 4; i++) {
      if (guess[i] === randomNumber[i]) {
        correctPosition++;
      } 
      if (randomNumber.includes(guess[i])) {
        correctNumber++;
      }
    }
    
        
      
    
    if (correctPosition === 4 ) {
        Swal.fire({
            title: "YES !",
            text: "You Win  Do you want Repeat",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Repeat",
            cancelButtonText: "Cancel",
            showCloseButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            } else if (result.isDismissed === Swal.DismissReason.cancel) {
              Swal.fire("Cancelled", "You clicked 'Cancel'", "error");
            }
          });

    } else {
        const tableBody = document.getElementById("tb");

  const newRow = document.createElement("tr");
  const numberrow = document.createElement("td");
  numberrow.textContent = value ; 
  const cnrow = document.createElement("td");
  cnrow.textContent = correctNumber;
  const cprow = document.createElement("td");
  cprow.textContent = correctPosition ;
  

  newRow.appendChild(numberrow).classList.add('affichage');
  newRow.appendChild(cnrow).classList.add('affichage');
  newRow.appendChild(cprow).classList.add('affichage');

  tableBody.appendChild(newRow);
        value="";
        document.getElementById("Numero").value = value;

    }
}
if(limit==9){
Swal.fire({
    title: "Emmmm !",
    text: "You lose Do you want Repeat",
    icon: "error",
    showCancelButton: true,
    confirmButtonText: "Repeat",
    cancelButtonText: "Cancel",
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    } else if (result.isDismissed === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "You clicked 'Cancel'", "error");
    }
  });
  

}
limit+=1;
  }

  function HowToplay(){
    Swal.fire({
        title: "How To Play ?",
        text: "Please choose an option",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "English",
        cancelButtonText: "العربية",
      }).then((result) => {
        if (result.isConfirmed) {
          // Option 1 was clicked
          Swal.fire("How to play", "When you open the game, a random 4-digit number is generated, and you have 10 attempts to guess the correct number.Enter a 4-digit number Click the Check button to see if your guess is correct.If your guess has the correct digits in the correct positions, you'll get a success alert saying You Win. You'll have the option to repeat the game by clicking the Repeat button or canceling the game by clicking Cancel.If your guess is incorrect, a new row will be added to the table below, showing your guess, the number of correct digits (regardless of their positions), and the number of correct digits in the correct positions.Continue guessing numbers until you either guess the correct number or use up all 10 attempts.If you guess the correct number within 10 attempts, you'll see a success alert to congratulate you and ask if you want to play again. If you don't guess the correct number within 10 attempts, you'll see an error alert letting you know you lost and asking if you want to play again.", "success");
        } else {
          // Option 2 was clicked (since there's no "Cancel" button)
          Swal.fire("طريقة اللعب", "  عند فتح اللعبة، يتم توليد رقم عشوائي مكون من 4 أرقام، ولديك 10 محاولات لتخمين الرقم الصحيح.أدخل رقمًا مكوّنًا من 4 أرقام في حقل الإدخال المسمى Numero.انقر على زر Check لمعرفة ما إذا كان تخمينك صحيحًا.إذا كان التخمين لديك يحتوي على الأرقام الصحيحة في المواقع الصحيحة، ستظهر لك رسالة تنبيه ناجحة تقول You Win (لقد فزت). سيكون لديك خيار تكرار اللعبة بالنقر على زر Repeat أو إلغاء اللعبة بالنقر على زر Cancel.إذا كان التخمين غير صحيح، سيتم إضافة صف جديد إلى الجدول أدناه، والذي سيعرض تخمينك، وعدد الأرقام الصحيحة (بغض النظر عن مواقعها)، وعدد الأرقام الصحيحة في المواقع الصحيحة.استمر في تخمين الأرقام حتى تخمّن الرقم الصحيح أو تنفد جميع المحاولات العشر.إذا قمت بتخمين الرقم الصحيح في غضون 10 محاولات، سترى رسالة تنبيه ناجحة تهنئك وتسألك ما إذا كنت ترغب في اللعب مرة أخرى.إذا لم تتمكن من تخمين الرقم الصحيح في غضون 10 محاولات، سترى رسالة تنبيه خطأ تخبرك أنك خسرت وتسألك ما إذا كنت ترغب في اللعب مرة أخرى.", "success");
        }
      });
      
      
      
      
  }

 