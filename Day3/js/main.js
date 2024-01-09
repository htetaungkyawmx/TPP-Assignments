  // let newNode = document.createElement('div');
  // newNode.innerHTML = '<p>New Node</p>'; // <div><p>New Node</p></div>
  // newNode.classList.add('newclass');
  // let selectNode = document.querySelector('.p-bloc--faq');
  // // selectNode.appendChild(newNode);

  // let referenceNode = document.querySelectorAll('.p-faqlist')[0];
  // selectNode.insertBefore(newNode, referenceNode);

  // document.querySelector('.newclass').remove();

  let faq = document.querySelectorAll('.faq');
  for(let i = 0; i < faq.length; i++ ) {
    faq[i].addEventListener('click', function(e) {
      e.preventDefault();
      faq[i].classList.toggle('show');
      faq[i].querySelector('.faq__qus').innerHTML = '<h2 class="faq__title">FAQ</h2><i class="fa-solid fa-minus"></i>';
    })
  }