$(document).ready(function(){
    $("#pagina_home").click(function(){
        document.getElementById("pagini_continut").innerHTML= '<p id="despre">Despre noi</p> <hr/> '
                                                                + '<p id="citat">We dont create websites, we create success!!</p>'
                                                              + '<p>Suntem o firma de web design si promovare online din Iasi, specializata in realizarea de siteuri web profesionale '
                                                                +'care sa promoveze cu succes imaginea companiei tale pe internet.'
                                                                +'Fie ca este vorba de o un simplu site de prezentare sau cerintele tale presupun dezvoltarea unor web '
                                                                +'site-uri complexe gen cataloag online, magazin online, portal web, in noi gasiti profesionistii de '
                                                                +'care aveti nevoie</p>'
                                                                + '<p>Calitatea serviciilor prestate, seriozitatea , originalitatea in dezvoltarea produselor sunt doar o parte din elementele ce ne definesc.'
                                                                +'Diversificand in permanenta gama serviciilor dar si oferind mereu solutii inovatoare, constituim o optiune serioasa pentru dezvoltarea '
                                                                +'imaginii afacerii tale pe internet. De succesul tau depinde si succesul nostru!<p>'
     })


    $("#pagina_servicii").click(function(){

        document.getElementById("pagini_continut").innerHTML=' <p id="despre">Servicii </p><hr/> '
                                                            + '<div id="pagini_continut_servicii">'
                                                            + ' <div><img src="imagini/site_prezentare.png"/><h3>SITE DE PREZENTARE </h3></div>'
                                                            + ' <div><img src="imagini/magazin_online.png"/><h3>MAGAZIN ONLINE </h3></div>'
                                                            + ' <div><img src="imagini/optimizare_seo.png"/><h3>OPTIMIZARE SEO  </h3></div>'
                                                            + ' <div><img src="imagini/mentenanta_web.png"/><h3>MENTENANTA WEB</h3></div>'
                                                            + ' <div><img src="imagini/social_media.png"/><h3>SOCIAL MEDIA </h3></div>'
                                                            + ' <div><img src="imagini/graphic_design.png"/><h3>GRAPHIC DESIGN </h3></div>'
                                                            +  '</div>'
                                                            + '<div id="acceseaza"> <h4><a href="servicii.html">ACCESEAZA PAGINA </a><h4></div>'
    
    })

    $("#pagina_portofoliu").click(function(){

        document.getElementById("pagini_continut").innerHTML=' <p id="despre">Portofoliu</p> <hr/> '
                                                            + '<div id="pagini_continut_portofoliu">'
                                                            + ' <div><img src="imagini/pensiunea_golden.png"/><a href="http://www.pensiuneagolden.ro"> <h1>Pensiunea Golden</h1></a></div>'
                                                            + ' <div><img src="imagini/mak_inovator.png"/> <a href="http://www.makinovator-ddd.ro"><h1>Mak Inovator -  DDD</h1></a></div>'
                                                            +  '</div>'
                                                             + '<div id="acceseaza"> <h4><a href="portofoliu.html">ACCESEAZA PAGINA </a><h4></div>'

    
    })

    $("#pagina_noutati").click(function(){

        document.getElementById("pagini_continut").innerHTML=' <p id="despre">Noutati</p> <hr/> '
                                                            + '<div id="pagini_continut_noutati">'
                                                            + '<img src="imagini/blog1.jpg"/><h2>Ce ar trebui sa contina orice site web pentru a avea succes?</h2>'
                                                            + ' <p>Crearea unui site web a devenit necesara pentru aproximativ toate afacerile din zilele noastre, fiind o cale potrivita si eficienta de '
                                                            +' a ne trasmite mesajul unui numar cat mai mare de posibili clienti, imprastiati in diverse colturi... </p>'
                                                            +  '<a href="articol1.html"> <h5>VEZI ARTICOL</h5></a>'
                                                            +  '</div>'
                                                            + '<div id="acceseaza"> <h4><a href="noutati.html">VEZI TOATE ARTICOLELE </a><h4></div>'
       
    
    })

    $("#pagina_echipa").click(function(){

        document.getElementById("pagini_continut").innerHTML=' <p id="despre">Echipa</p> <hr/> '
                                                            + '<div id="pagini_continut_echipa">'
                                                            + '<img src="imagini/dana.png"/>'
                                                            + '<a href="cv-converted.pdf" tabindex="-1"><strong><h3 id="display_cv">BOBLEANCA-AXINTE DANA</h3></strong></a>'
                                                            +  '</div>'
                                                             + '<div id="acceseaza"> <h4><a href="echipa.html">ACCESEAZA PAGINA </a><h4></div>'
    
    })


    $("#pagina_contact").click(function(){

        document.getElementById("pagini_continut").innerHTML=' <p id="despre">Contact</p> <hr/> '
                                                            + ' <div id="date_contact"> <div id="adresa">'
                                                            +  '<img src="imagini/address.png" ><br/>'
                                                            + ' <p>Str. Orientului nr 1. bl. 850, sc. A, Iasi, Romania</p>'
                                                            +'</div> <div id="telefon"> <img src="imagini/phone.png" ><br/>'
                                                            + ' <p>+40 747 375 433</p> </div> <div id="email">  <img src="imagini/email.png" ><br/>'
                                                            + '<p>contact@goldwebdesign.ro</p><p> goldwebdesign@yahoo.com</p>'
                                                            + '</div> <div id="website"> <img src="imagini/facebook.png" ><br/>'
                                                            +'<p id="facebook_page"><a href="https://www.facebook.com/goldwebdesign1">Gold Web Design</a></p></div></div>'
                                                             + '<div id="acceseaza"><h4><a href="contact.html">ACCESEAZA PAGINA </a><h4> </div>'
    
    })

    

});
