<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>density.js - Example</title>
</head>
<body>
  
</body>
<script src="density.js?time=<?= time(); ?>"></script>
<script>
let html = `<h2>Välkommen till Devonera!</h2> <p>Devonera AB är välkommen till devonera ett litet företag med bara en anställd. Bolaget arbetar i huvudsak med affiliate men även till viss del med webbproduktion åt kunder.</p> <p>Jag som driver Devonera heter Jens Törnell och startade företaget 2016. Innan dess drev jag enskilda firman Webblayout Opius vilket sedan ombildades till aktiebolag.</p> </section> </div> <div class="block"> <div class="background" style="background-image: url('https://devonera.se/thumbs/home/kontakt/email-3249062_960_720-720x403-q70.png'); background-position: ; "> </div> <section> <h2>Kontakta oss</h2> <p>Det finns alltid ett intresse av samarbeten eller uppdrag. Vi säger inte alltid ja till allt, men vi kikar på allt som kommer in.</p>`;

let kd = new Density(2);

kd.set(html);
kd.process();

log = kd.density;

console.log(log);
</script>
</html>