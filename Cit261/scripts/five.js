function setGet(){
localStorage.setItem('firstName', 'Alyssa');
var myName = localStorage.getItem('firstName');
document.getElementById("setGet").innerHTML = myName;
}

function arrays(){
    
}

function arrays2(){
    
}

function objects(){
    var films = [
             {
              'id': 1,
              'title':'John Wick',
              'Genre':'Action'
             },
             {
              'id': 2,
              'title':'Taken 3',
              'Genre':'Action'
             },
             {
              'id': 3,
              'title':'The Guard',
              'Genre':'Comedy'
             }
            ];
localStorage.setItem('films', JSON.stringify(films));
var movies = localStorage.getItem('films');
movies = JSON.parse(movies);
document.getElementById("objects").innerHTML = movies;
    
}

