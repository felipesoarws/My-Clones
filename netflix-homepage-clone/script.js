let $iconDetails = document.querySelectorAll(".xIcon");
let $questions = document.querySelectorAll(".row");
let $answer = document.querySelectorAll(".answer");

$questions.forEach((qst, ind) => {
  addElement($answer, ind, 'disappear')

  qst.addEventListener("click", (e) => {
    let verif = $answer[ind].classList[1] == 'show'
    if(verif) {

      removeElement($answer, ind, 'show')
      removeElement($iconDetails, ind, 'rotate')
      addElement($answer, ind, 'disappear')

    } else {

      removeElement($answer, ind, 'disappear')
      addElement($answer, ind, 'show')
      addElement($iconDetails, ind, 'rotate')
    }
  });
});


function addElement (el, idx, action) {
  el[idx].classList.add(action)
}

function removeElement (el, idx, action) {
  el[idx].classList.remove(action)
}