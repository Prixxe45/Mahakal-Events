function book(person) {
  let number = person === 'Surend' ? '919826315698' : '917505273165';
  let message = encodeURIComponent("Hi! I want to book an event with Mahakal Events.");
  window.open(`https://wa.me/${number}?text=${message}`, '_blank');
}
function bookWithMahakal() {
  const person = document.querySelector('input[name="person"]:checked').value;
  book(person);
}