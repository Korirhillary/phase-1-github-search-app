let form=document.getElementById('github-form');
//connecting html form to js
const userName= search.split('').join('')
//declaring username
form.addEventListener("submit",function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    alert(userName)
    //making the form responsive
})
li.innerHTML=`<li>${userName[i].login}</li><p>${userName[i].HTML_url}</p><img src ${userName[i].avatar_url}/>`;
userlist.appendChild(li)
//appending the search results to html
li.addEventListener("click",()=>{
    fetch(`https://api.github.com/users/octocat/repos`)
    //fetching users from github
    .then(response=>response.json)
    //specifying the results to be json
    .then(repos=>
        console.log(repos))
        for (let i=0 ;i<repos.length;i++){
        const reposList=document.querrySelector("#repos-list")
        //iteration through the json list
        const ripleli=document.create ('li')
        ripleli.innnerHTML=`${ripleli[i].userName}`
        reposList.appendChild(ripleli)
        }    
}
)