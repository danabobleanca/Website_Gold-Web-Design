<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['msg'];

		$to='contact@goldwebdesign.ro'; 
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;
	}
?>
<!DOCTYPE html>
<html>

<head>
    <link href="main.css" rel="stylesheet" type="text/css"/>  
    <link href="responsive.css" rel="stylesheet" type="text/css"/>  
    <link href="https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.0.0.js"></script>
    <script type="text/javascript" src="website.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body>
    <header>
        <div id="header_phone"><img src="imagini/white_phone.png"><span>+40 747 375 433</span></div>
        <div id="header_facebook"><img src="imagini/facebook_white.png"><a href="https://www.facebook.com/goldwebdesign1"><span>Gold Web design</span></a></div>
        <div id="header_mail"><img src="imagini/mail_white.png"><span>contact@goldwebdesign.ro / goldwebdesign@yahoo.com</span></div>
  </header>
    <nav>
        <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="servicii.html">SERVICII</a></li>
            <li><a href="portofoliu.html">PORTOFOLIU</a></li>
            <li><a href="noutati.html">NOUTATI</a></li>
            <li><a href="echipa.html">ECHIPA</a></li>
            <li id="linie_final"><a href="contact.php">CONTACT</a></li>
        </ul>
    </nav>
    <section>
        <div id="continut">
            <div id="continut1">
                <div id="logo">
                    <a href="index.html"><img src="imagini/logo.png"/></a>
                </div>
                <div id="servicii_banner" class="banner">
                    <h1>CONTACT</h1>
                </div>
            </div>
        </div>
        <div id="continut2">
            <div id="pagina_contact2">
            <div id="formular">
                <form action="" method="post" name="form" class="form-box">
                    <h1>Formular Contact</h1>
                    <label for="name">Name</label><br>
                    <input type="text" name="name" class="inp" placeholder="Enter Your Name" required><br>
                    <label for="email">Email ID</label><br>
                    <input type="email" name="email" class="inp" placeholder="Enter Your Email" required><br>
                    <label for="phone">Phone</label><br>
                    <input type="tel" name="phone" class="inp" placeholder="Enter Your Phone" required><br>
                    <label for="message">Message</label><br>
                    <textarea name="msg" class="msg-box" placeholder="Enter Your Message Here..." required></textarea><br>
                    <input type="submit" name="submit" value="Send" class="sub-btn">
                </form> 
            </div>  
            <div id="date_contact">
                <div id="adresa">
                    <img src="imagini/address.png" ><br/>
                    <p>Str. Orientului nr 1. bl. 850, sc. A, Iasi, Romania</p>
                </div>
                <div id="telefon">
                    <img src="imagini/phone.png" ><br/>
                    <p>+40 747 375 433</p>
                </div>
                <div id="email">
                    <img src="imagini/email.png" ><br/>
                    <p>contact@goldwebdesign.ro</p>
                    <p> goldwebdesign@yahoo.com</p>
                </div>
                <div id="website">
                    <img src="imagini/facebook.png" ><br/>
                    <p id="facebook_page"><a href="https://www.facebook.com/goldwebdesign1">Gold Web Design</a></p>
                </div>

            </div>
            </div>
        </div>

    </section>
    <footer id="footer">
        Copyright &copy 2020 Gold Web Design <br/>
        Construit & intretinut de <a href="http://www.goldwebdesign.ro">BOBLEANCA AXINTE DANA</a><br/>
        Toate drepturile rezervate
    </footer>
</body>
