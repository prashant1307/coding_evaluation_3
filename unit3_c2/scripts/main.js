function userObj(name,email,address,amount){
    this.name=name;
    this.email=email;
    this.address=address;
    this.wallet=amount;
  }
  document.querySelector('form').addEventListener('submit',myfun)
  function myfun(){
    event.preventDefault()
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let address=document.getElementById('address').value;
    let amount=document.getElementById('amount').value;
    var user=new userObj(name,email,address,Number(amount))
    //console.log(newUser)
    localStorage.setItem('user',JSON.stringify(user))
    document.getElementById('name').value=null;
    document.getElementById('email').value=null;
    document.getElementById('address').value=null;
    document.getElementById('amount').value=null;
  }