/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   
    //To clear the text whenever user clicks on textbox in the register form
	$('#Indivpasswordclear').show();
    $('#Indivpassword').hide();
    $('#Indivpasswordclear').focus(function() {
        $('#Indivpasswordclear').hide();
        $('#Indivpassword').show();
        $('#Indivpassword').focus();
    });
    $('#Indivpassword').blur(function() {
        if($('#Indivpassword').val() == '') {
        $('#Indivpasswordclear').show();
        $('#Indivpassword').hide();
    }
    });

    $('#Indivcnfrmpasswordclear').show();
    $('#Indivcnfrmpassword').hide();
    $('#Indivcnfrmpasswordclear').focus(function() {
        $('#Indivcnfrmpasswordclear').hide();
        $('#Indivcnfrmpassword').show();
        $('#Indivcnfrmpassword').focus();
    });
    $('#Indivcnfrmpassword').blur(function() {
        if($('#Indivcnfrmpassword').val() == '') {
        $('#Indivcnfrmpasswordclear').show();
        $('#Indivcnfrmpassword').hide();
    }
    });

    $('#Indivnameclear').show();
    $('#Indivnametext').hide();
    $('#Indivnameclear').focus(function() {
        $('#Indivnameclear').hide();
        $('#Indivnametext').show();
        $('#Indivnametext').focus();
    });
    $('#Indivnametext').blur(function() {
        if($('#Indivnametext').val() == '') {
        $('#Indivnameclear').show();
        $('#Indivnametext').hide();
    }
    });
    $('#Indivmailidclear').show();
    $('#Indivmailidtext').hide();
    $('#Indivmailidclear').focus(function() {
        $('#Indivmailidclear').hide();
        $('#Indivmailidtext').show();
        $('#Indivmailidtext').focus();
    });
    $('#Indivmailid-text').blur(function() {
        if($('#Indivmailidtext').val() == '') {
        $('#Indivmailidclear').show();
        $('#Indivmailidtext').hide();
    }
    });
    $('#Indivfullnameclear').show();
    $('#Indivfullnametext').hide();
    $('#Indivfullnameclear').focus(function() {
        $('#Indivfullnameclear').hide();
        $('#Indivfullnametext').show();
        $('#Indivfullnametext').focus();
    });
    $('#Indivfullnametext').blur(function() {
        if($('#Indivfullnametext').val() == '') {
        $('#Indivfullnameclear').show();
        $('#Indivfullnametext').hide();
    }
    });
    $('#Indivmobnoclear').show();
    $('#Indivmobnotext').hide();
    $('#Indivmobnoclear').focus(function() {
        $('#Indivmobnoclear').hide();
        $('#Indivmobnotext').show();
        $('#Indivmobnotext').focus();
    });
    $('#Indivmobnotext').blur(function() {
        if($('#Indivmobnotext').val() == '') {
        $('#Indivmobnoclear').show();
        $('#Indivmobnotext').hide();
    }
    });
    $('#passwordclear').show();
    $('#password').hide();
    $('#passwordclear').focus(function() {
        $('#passwordclear').hide();
        $('#password').show();
        $('#password').focus();
    });
    $('#password').blur(function() {
        if($('#password').val() == '') {
        $('#passwordclear').show();
        $('#password').hide();
    }
    });

    $('#cnfrmpasswordclear').show();
    $('#cnfrmpassword').hide();
    $('#cnfrmpasswordclear').focus(function() {
        $('#cnfrmpasswordclear').hide();
        $('#cnfrmpassword').show();
        $('#cnfrmpassword').focus();
    });
    $('#cnfrmpassword').blur(function() {
        if($('#cnfrmpassword').val() == '') {
        $('#cnfrmpasswordclear').show();
        $('#cnfrmpassword').hide();
    }
    });

    $('#nameclear').show();
    $('#nametext').hide();
    $('#nameclear').focus(function() {
        $('#nameclear').hide();
        $('#nametext').show();
        $('#nametext').focus();
    });
    $('#nametext').blur(function() {
        if($('#nametext').val() == '') {
        $('#nameclear').show();
        $('#nametext').hide();
    }
    });
    $('#mailidclear').show();
    $('#mailidtext').hide();
    $('#mailidclear').focus(function() {
        $('#mailidclear').hide();
        $('#mailidtext').show();
        $('#mailidtext').focus();
    });
    $('#mailidtext').blur(function() {
        if($('#mailidtext').val() == '') {
        $('#mailidclear').show();
        $('#mailidtext').hide();
    }
    });
    $('#fullnameclear').show();
    $('#fullnametext').hide();
    $('#fullnameclear').focus(function() {
        $('#fullnameclear').hide();
        $('#fullnametext').show();
        $('#fullnametext').focus();
    });
    $('#fullnametext').blur(function() {
        if($('#fullnametext').val() == '') {
        $('#fullnameclear').show();
        $('#fullnametext').hide();
    }
    });
    $('#mobnoclear').show();
    $('#mobnotext').hide();
    $('#mobnoclear').focus(function() {
        $('#mobnoclear').hide();
        $('#mobnotext').show();
        $('#mobnotext').focus();
    });
    $('#mobnotext').blur(function() {
        if($('#mobnotext').val() == '') {
        $('#mobnoclear').show();
        $('#mobnotext').hide();
    }
    });

    $('#schnameclear').show();
    $('#schnametext').hide();
    $('#schnameclear').focus(function() {
        $('#schnameclear').hide();
        $('#schnametext').show();
        $('#schnametext').focus();
    });
    $('#schnametext').blur(function() {
        if($('#schnametext').val() == '') {
        $('#schnameclear').show();
        $('#schnametext').hide();
    }
    });
     $('#schaddclear').show();
    $('#schaddtext').hide();
    $('#schaddclear').focus(function() {
        $('#schaddclear').hide();
        $('#schaddtext').show();
        $('#schaddtext').focus();
    });
    $('#schaddtext').blur(function() {
        if($('#schaddtext').val() == '') {
        $('#schaddclear').show();
        $('#schaddtext').hide();
    }
    });
     $('#schcityclear').show();
    $('#schcitytext').hide();
    $('#schcityclear').focus(function() {
        $('#schcityclear').hide();
        $('#schcitytext').show();
        $('#schcitytext').focus();
    });
    $('#schcitytext').blur(function() {
        if($('#schcitytext').val() == '') {
        $('#schcityclear').show();
        $('#schcitytext').hide();
    }
    });

    $('#schstatetext').show();
     $('#schphclear').show();
    $('#schphtext').hide();
    $('#schphclear').focus(function() {
        $('#schphclear').hide();
        $('#schphtext').show();
        $('#schphtext').focus();
    });
    $('#schphtext').blur(function() {
        if($('#schphtext').val() == '') {
        $('#schphclear').show();
        $('#schphtext').hide();
    }
     $('#closebut').hide();
     
     
    });
/*$("#loginbut").click( function()
{
    var login_name= $.trim($('#login_name').val());
    var login_pass  = $.trim($('#login_pass').val());
    var login_remember  = $.trim($('#remember').val());
    if(login_name.search(/\S/) == -1 || login_name == "Username")
    {
        document.getElementById("logmsg").innerHTML = "Please enter an Username/Useremail ";
        document.getElementById('login_name').focus();
        return false;
    }
    else if(login_pass.search(/\S/) == -1 || login_pass == "Password")
    {
        document.getElementById("logmsg").innerHTML = "Please enter a password ";
        document.getElementById('login_pass').focus();
        return false;
    }
    return true;
   // document.getElementById("loginform").submit();
});
*/

 $("#logincls").click( function()
 {
    document.getElementById("logmsg").innerHTML = "";
 });
 
$("#forgotpwdcls").click( function()
{
    document.getElementById("formsg").innerHTML = "";
    document.getElementById('forgot_email').value="Email Address";
});


$("#step1cancel").click( function()
 {
   
    document.getElementById("step1errormsg").innerHTML="";
    $("#selopt").attr("checked" , false );
 });
 
 $("#step1cls").click( function()
 {
    document.getElementById("step1errormsg").innerHTML="";
    $("#selopt").attr("checked" , false );
 });
 $("#step2cancelbut").click( function()
 {
    document.getElementById("regerrmsg").innerHTML="";
    document.getElementById("step2errormsg").innerHTML="";
   
    $('input:radio[name=selopt]:checked').val=-1;
    //clear all the textbox value
    $("#selopt").attr("checked" , false );
    $('#name-text').hide();
    $('#name-clear').show();
    $('#mailid-text').hide();
    $('#mailid-clear').show();
    $('#fullname-text').hide();
    $('#fullname-clear').show();
    $('#mobno-text').hide();
    $('#mobno-clear').show();
    $('#password-password').hide();
    $('#password-clear').show();
    $('#cnfrmpassword-password').hide();
    $('#cnfrmpassword-clear').show();
    document.getElementById('name-text').value="";
    document.getElementById('mailid-text').value="";
    document.getElementById('fullname-text').value="";
    document.getElementById('mobno-text').value="";
    document.getElementById('password-password').value="";
    document.getElementById('cnfrmpassword-password').value="";  
     //$("#step1cancel").click();
 });
 
 
 $("#step2cls").click( function()
 {
    document.getElementById("regerrmsg").innerHTML="";
    document.getElementById("step2errormsg").innerHTML="";
    //clear all the textbox value
    $("#selopt").attr("checked" , false );
    $('#name-text').hide();
    $('#name-clear').show();
    $('#mailid-text').hide();
    $('#mailid-clear').show();
    $('#fullname-text').hide();
    $('#fullname-clear').show();
    $('#mobno-text').hide();
    $('#mobno-clear').show();
    $('#password-text').hide();
    $('#password-clear').show();
    $('#cnfrmpassword-text').hide();
    $('#cnfrmpassword-clear').show();
    document.getElementById('name-text').value="";
    document.getElementById('mailid-text').value="";
    document.getElementById('fullname-text').value="";
    document.getElementById('mobno-text').value="";
    document.getElementById('password-text').value="";
    document.getElementById('cnfrmpassword-text').value="";
    
 });
 
 $("#step3cancel").click( function()
 {
     document.getElementById("regerrmsg").innerHTML="";
    document.getElementById("step3errormsg").innerHTML="";
    //clear all the textbox value
    $("#selopt").attr("checked" , false );
    //all school info
    $('#schname-text').hide();
    $('#schname-clear').show();
    $('#schadd-text').hide();
    $('#schadd-clear').show();
    $('#schcity-text').hide();
    $('#schcity-clear').show();
    $('#schph-text').hide();
    $('#schph-clear').show();
    $('#schstate-text').hide();
    document.getElementById('schname-tex').value="";
    document.getElementById('schadd-text').value="";
    document.getElementById('schcity-text').value="";
    document.getElementById('schph-text').value="";
    
    
    
    document.getElementById("regerrmsg").innerHTML="";
    document.getElementById("step2errormsg").innerHTML="";
    //clear all the textbox value
    $("#selopt").attr("checked" , false );
    $('#name-text').hide();
    $('#name-clear').show();
    $('#mailid-text').hide();
    $('#mailid-clear').show();
    $('#fullname-text').hide();
    $('#fullname-clear').show();
    $('#mobno-text').hide();
    $('#mobno-clear').show();
    $('#password-text').hide();
    $('#password-clear').show();
    $('#cnfrmpassword-text').hide();
    $('#cnfrmpassword-clear').show();
    document.getElementById('name-text').value="";
    document.getElementById('mailid-text').value="";
    document.getElementById('fullname-text').value="";
    document.getElementById('mobno-text').value="";
    document.getElementById('password-text').value="";
    document.getElementById('cnfrmpassword-text').value="";
 });
 
 
 
});	

function validate_idpwd()
{
	  var login_name= $.trim($('#login_name').val());
	    var login_pass  = $.trim($('#login_pass').val());
	    var login_remember  = $.trim($('#remember').val());
	    if(login_name.search(/\S/) == -1 || login_name == "Username")
	    {
	        document.getElementById("logmsg").innerHTML = "Please enter an Username/Useremail ";
	        document.getElementById('login_name').focus();
	        return false;
	    }
	    else if(login_pass.search(/\S/) == -1 || login_pass == "Password")
	    {
	        document.getElementById("logmsg").innerHTML = "Please enter a password ";
	        document.getElementById('login_pass').focus();
	        return false;
	    }
	    return true;
	  

}
/* forgot password validation*/
function forgot_check()
{
 var forgot_email  = $.trim($('#forgot_email').val());
    if(forgot_email.search(/\S/) == -1)
    {
        document.getElementById("formsg").innerHTML = "Please enter Email Address.";
        document.getElementById('forgot_email').focus();
        return false;
    }
    else if((/^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z.]{2,5}$/).exec(forgot_email)== null)
    {
        
        document.getElementById("formsg").innerHTML = "Please enter Email Address.";
        document.getElementById('forgot_email').focus();
        return false;
    }	
}
function step1()
{
   alert("step1");
    if ($('input:radio[name=selopt]:checked').val()==1)
    {
        document.getElementById("step1errormsg").innerHTML ="";
        document.getElementById('selsite').value= "1";
        document.getElementById('lightregIndivstep2').style.display='block';
		 document.getElementById('fade').style.display='block'; 
        document.getElementById("gsp").style.display="none";
        document.getElementById("gsplabel").style.display="none";
        document.getElementById("regbutton").style.display="inline";
        document.getElementById("regnextbut").style.display="none";
        document.getElementById("prebutton").style.display="inline";
        document.getElementById("myText").innerHTML ="Register as Individual";
        document.getElementById('closebut').style.display="none";
        document.getElementById('indvmsg').style.display="block";
        return false;
        
    }
    else if ($('input:radio[name=selopt]:checked').val()==2)
    {
        document.getElementById("step1errormsg").innerHTML ="";
        document.getElementById('selsite').value="2";
        document.getElementById('lightregstep2').style.display='block';
        document.getElementById('fade').style.display='block'; 
        document.getElementById("gsp").style.display="inline";
        document.getElementById("gsplabel").style.display="inline";
        document.getElementById("regnextbut").style.display="inline";
        document.getElementById("regbutton").style.display="none";
        document.getElementById("myText").innerHTML ="Register as School";
        document.getElementById("prebutton").style.display="inline";
        return false;
    }
    else
    {
    document.getElementById("step1errormsg").innerHTML = "Please select one of the option to register for SeasonWatch website.";
    return false;

    }
  
   
}
function RegisterAsSchool()
{
   if (validateschooluser())
       {
         if(document.getElementById('gsp').checked)
        {
        document.getElementById("selschool").innerHTML ="Register as GSP-School";
        document.getElementById("schcat").value="school-gsp";
        }
        else
        {
        document.getElementById("selschool").innerHTML ="Register as School";
        document.getElementById("schcat").value="school";
        }
        document.getElementById("step2errormsg").innerHTML = "";
        document.getElementById('lightregstep2').style.display='none';
        document.getElementById('lightregstep3').style.display='block';
        document.getElementById('fade').style.display='block';
        return false;
       }
 }
function validateschooluser()
{
    var mailmatch = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var invalid = " "; // Invalid character is a space 
    var re = /.+/;
    var name =$.trim($('#nametext').val());
    var fullname =$.trim($('#fullnametext').val());
    var mailID =$.trim($('#mailidtext').val());
    var spwd1 =$.trim($('#password').val());
    var spwd2 =$.trim($('#cnfrmpassword').val());
    var nMobno =$.trim($('#mobnotext').val());
    if(!name.match(re)) 
    {
        document.getElementById("step2errormsg").innerHTML ="Please enter the User Name.";
        document.getElementById('nametext').focus();
        document.getElementById('nametext').select();
        return false;
    }
    else if(!mailID.match(re)) 
    {
       document.getElementById("step2errormsg").innerHTML ="Please enter the Mail ID.";
        document.getElementById('mailidtext').focus();
        document.getElementById('mailidtext').select();
        return false;
    }
    else if(!mailID.match(mailmatch)) 
    {
        document.getElementById("step2errormsg").innerHTML ="Please enter Mail ID in the format xx@xxxx.xxx";
        document.getElementById('mailidtext').focus();
        document.getElementById('mailidtext').select();
        return false;
    }
    else if(!fullname.match(re)) 
    {
        document.getElementById("step2errormsg").innerHTML ="Please enter the Full Name";
        document.getElementById('fullnametext').focus();
        document.getElementById('fullnametext').select();
        return false;
    }
    else if(!spwd1.match(re)) 
    {
        
         document.getElementById("step2errormsg").innerHTML ="Please enter the Password.";
        document.getElementById('password').focus();
        document.getElementById('password').select();
        return false;
    }
    else if(!spwd2.match(re)) 
    {
        document.getElementById("step2errormsg").innerHTML ="Please enter the Password.";
        document.getElementById('cnfrmpassword').focus();
        document.getElementById('cnfrmpassword').select();
        return false;
    }
    
    else if(document.getElementById('password').value != document.getElementById('cnfrmpassword').value )
    {
        document.getElementById("step2errormsg").innerHTML ="Re-entered password doesn't match. Please enter both again.";
        document.getElementById('password').value='';
        document.getElementById('cnfrmpassword').value='';
        document.getElementById('password').focus();
        return false;
    }
    else if (spwd1.length <5)
    {
        document.getElementById("step2errormsg").innerHTML ="password length should be atleast 5 characters.";
        document.getElementById('password').value='';
        document.getElementById('cnfrmpassword').value='';
        document.getElementById('password').focus();
        return false;  
     }
        document.getElementById("schcordname").value=$.trim($('#nametext').val());
        document.getElementById("schcordfullname").value=$.trim($('#fullnametext').val());
        document.getElementById("schcordmailid").value=$.trim($('#mailidtext').val());
        document.getElementById("schcordmob").value=$.trim($('#mobnotext').val());
        document.getElementById("schcordpwd").value=$.trim($('#password').val());
        return true;
}


function validate_regIndivstep()
{
    var mailmatch = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var invalid = " "; // Invalid character is a space 
    var re = /.+/;
    var name =$.trim($('#Indivnametext').val());
    var fullname =$.trim($('#Indivfullnametext').val());
    var mailID =$.trim($('#Indivmailidtext').val());
    var spwd1 =$.trim($('#Indivpassword').val());
    var spwd2 =$.trim($('#Indivcnfrmpassword').val());
    var nMobno =$.trim($('#Indivmobnotext').val());
    if(!name.match(re) ) 
    {
        document.getElementById("stepIndverrormsg").innerHTML ="Please enter the User Name.";
        document.getElementById('Indivnametext').focus();
        document.getElementById('Indivnametext').select();
        return false;
    }
    else if(!mailID.match(re)) 
    {
       
        document.getElementById("stepIndverrormsg").innerHTML ="Please enter the Mail ID.";
        document.getElementById('Indivmailidtext').focus();
        document.getElementById('Indivmailidtext').select();
        return false;
    }
    else if(!mailID.match(mailmatch)) 
    {
       
        document.getElementById("stepIndverrormsg").innerHTML ="Please enter Mail ID in the format xx@xxxx.xxx";
        document.getElementById('Indivmailidtext').focus();
        document.getElementById('Indivmailidtext').select();
        return false;
    }
    else if(!fullname.match(re)) 
    {
        document.getElementById("stepIndverrormsg").innerHTML ="Please enter the Full Name";
        document.getElementById('Indivfullnametext').focus();
        document.getElementById('Indivfullnametext').select();
        return false;
    }
    else if(!spwd1.match(re)) 
    {
        alert("Please enter the Password.");
        document.getElementById("stepIndverrormsg").innerHTML ="Please enter the Password.";
        document.getElementById('Indivpassword').focus();
        document.getElementById('Indivpassword').select();
        return false;
    }
    else if(!spwd2.match(re)) 
    {
        alert("Please enter the Password.");
      
         document.getElementById("stepIndverrormsg").innerHTML ="Please enter the Password.";
        document.getElementById('Indivcnfrmpassword').focus();
        document.getElementById('Indivcnfrmpassword').select();
        return false;
    }
    
    else if(document.getElementById('Indivpassword').value != document.getElementById('Indivcnfrmpassword').value )
    {
        document.getElementById("stepIndverrormsg").innerHTML ="Re-entered password doesn't match. Please enter both again.";
        document.getElementById('Indivpassword').value='';
        document.getElementById('Indivcnfrmpassword').value='';
        document.getElementById('Indivpassword').focus();
        return false;
    }
    else if (spwd1.length <5)
        {
        document.getElementById("stepIndverrormsg").innerHTML ="password length should be atleast 5 characters.";
        document.getElementById('Indivpassword').value='';
        document.getElementById('Indivcnfrmpassword').value='';
        document.getElementById('Indivpassword').focus();
        return false;  
        }
  return true;  
   
}

