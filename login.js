function jogaplay(){
    player1name=document.getElementById('player1name').value 
    player2name=document.getElementById('player2name').value 
    console.log(player1name+player2name)
    localStorage.setItem('player1key',player1name)
    localStorage.setItem('player2key',player2name)
    window.location='game.html'
}