(function() {
    console.log(111);
    let contentEle = document.getElementById('myContent');
    contentEle.onClick = function() {
        alert(111);
    };
})();