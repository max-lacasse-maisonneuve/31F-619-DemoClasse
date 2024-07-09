# Accèder à certaines informations de l'appareil

## API Navigator

L'objet `navigator` fournit des informations sur l'environnement de l'application, y compris le type de navigateur, le type de périphérique, la langue, etc.

### Accès à la géolocalisation

L'API `navigator.geolocation` permet d'accéder à la géolocalisation de l'appareil. Cette API fournit des méthodes pour obtenir la position actuelle de l'appareil.

Il faut passer deux fonctions de rappel à la méthode `getCurrentPosition()` pour gérer la réussite et l'échec de la récupération de la position.

```js
navigator.geolocation.getCurrentPosition(
    (position) => {
        //Si l'utilisateur autorise la géolocalisation, la position est récupérée
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    },
    (error) => {
        //Si l'utilisateur refuse la géolocalisation ou si une erreur se produit
        console.log("Erreur: " + error.message);
    }
);
```

Il existe d'autres fonctions de navigation comme `watchPosition()` qui permet de suivre les changements de position de l'appareil en temps réel.

Vous pourriez utiliser cette fonction pour suivre la position de l'utilisateur en temps réel et afficher sa position sur une carte.

```js
let watchId = navigator.geolocation.watchPosition(
    (position) => {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    },
    (error) => {
        console.log("Erreur: " + error.message);
    }
);

//Arrêter de suivre les changements de position
navigator.geolocation.clearWatch(watchId);
```

## Accès à la batterie

L'API `navigator.getBattery()` permet d'accéder à l'état de la batterie de l'appareil. Cette API retourne un objet `BatteryManager` qui contient des informations sur la batterie de l'appareil.

```js
navigator.getBattery().then((battery) => {
    console.log("Niveau de la batterie: " + battery.level * 100 + "%");
    console.log("Temps restant: " + battery.dischargingTime + " secondes");
});
```

[https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)

## Accès à la connexion réseau

L'API `navigator.connection` permet d'accéder à l'état de la connexion réseau de l'appareil. Cette API fournit des informations sur le type de connexion réseau (cellulaire, Wi-Fi, etc.) et la vitesse de la connexion.

Vous pourriez mettre en place un test pour vérifier si la connexion est lente et adapter le contenu de votre application en conséquence.

```js
console.log("Type de connexion: " + navigator.connection.type);
console.log("Vitesse de connexion: " + navigator.connection.downlink + " Mbps");
```

## Accès aux médias

L'API `navigator.mediaDevices` permet d'accéder aux périphériques multimédias de l'appareil, tels que la caméra et le microphone. Cette API fournit des méthodes pour accéder aux périphériques multimédias et pour capturer des flux multimédias.

```js
let video = document.createElement("video");

navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
        video.srcObject = stream;
        //Accès à la caméra et au microphone
        console.log("Caméra et microphone accessibles");
    })
    .catch((error) => {
        //Erreur lors de l'accès à la caméra et au microphone
        console.log("Erreur: " + error.message);
    });
```

### Prendre une photo

L'API `navigator.mediaDevices.getUserMedia()` peut être utilisée pour accéder à la caméra de l'appareil et capturer une photo en utilisant un élément `canvas`.

```js
let video = document.createElement("video");
let canvas = document.createElement("canvas");

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
});

document.getElementById("capture").addEventListener("click", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    let image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    document.body.appendChild(image);
});
```

### Enregistrement audio

L'API `navigator.mediaDevices.getUserMedia()` peut également être utilisée pour accéder au microphone de l'appareil et enregistrer un fichier audio.

L'enregistrement audio est plus compliqué que la capture d'une photo, car il nécessite de stocker les données audio dans un tableau et de les convertir en un fichier audio via un objet `Blob`.

```js
let audioChunks = [];

navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    let mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
        let audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        let audioUrl = URL.createObjectURL(audioBlob);
        let audio = new Audio(audioUrl);
        audio.controls = true;
        document.body.appendChild(audio);
    };
    mediaRecorder.start();
    setTimeout(() => {
        mediaRecorder.stop();
    }, 5000);
});
```

### L'objet `Blob`

L'objet `Blob` est un objet qui représente des données binaires brutes. Il est souvent utilisé pour stocker des données multimédias, telles que des images, des vidéos et des fichiers audio.

L'objet `Blob` peut être créé à partir de données binaires brutes, d'un tableau de données ou d'une chaîne de caractères. Il peut également être utilisé pour créer des objets `URL` à partir des données binaires brutes.

C'est l'équivalent d'un fichier en mémoire mais qui n'est pas stocké sur le disque dur.

```js
let data = "Hello, world!";
let blob = new Blob([data], { type: "text/plain" });
let url = URL.createObjectURL(blob);
console.log(url);
```

## Accès aux capteurs

L'API `navigator.sensors` permet d'accéder aux capteurs de l'appareil, tels que l'accéléromètre, le gyroscope et le magnétomètre. Cette API fournit des méthodes pour accéder aux données des capteurs et pour écouter les changements des données des capteurs.

Vous pourriez détecter les mouvements de l'appareil en utilisant l'accéléromètre.

```js
navigator.sensors.getSensor("accelerometer").then((accelerometer) => {
    accelerometer.onreading = () => {
        console.log("Accélération X: " + accelerometer.x);
        console.log("Accélération Y: " + accelerometer.y);
        console.log("Accélération Z: " + accelerometer.z);
    };
    accelerometer.start();
});
```

## Faire vibrer l'appareil

L'API `navigator.vibrate()` permet de faire vibrer l'appareil. Cette API prend en paramètre un tableau de durées de vibration en millisecondes.

```js
navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200]);
```
