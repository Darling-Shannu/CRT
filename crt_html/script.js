
    function add()
    {
        var x=document.getElementById("num1").value
        var y=document.getElementById("num2").value
        result1=parseInt(x)+parseInt(y)
        document.getElementById("num3").value=result1
    }
    function sub()
    {
        var x=document.getElementById("num1").value
        var y=document.getElementById("num2").value
        result1=parseInt(x)-parseInt(y)
        document.getElementById("num3").value=result1
    }
    function multi()
    {
        var x=document.getElementById("num1").value
        var y=document.getElementById("num2").value
        result1=parseInt(x)*parseInt(y)
        document.getElementById("num3").value=result1
    }
    function div()
    {
        var x=document.getElementById("num1").value
        var y=document.getElementById("num2").value
        result1=parseInt(x)/parseInt(y)
        document.getElementById("num3").value=result1
    }
    function remove()
    {
        x="";
        y="";
        document.getElementById("a").value=x
        document.getElementById("b").value=y
    }
    function remov()
    {
        x="";
        y="";
        document.getElementById("num1").value=x
        document.getElementById("num2").value=y
        document.getElementById("num3").value=""
    }
