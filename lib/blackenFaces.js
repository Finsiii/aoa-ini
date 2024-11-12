const faceapi = require('face-api.js');
const canvas = require('canvas');
const { Canvas, Image, ImageData } = canvas;
const Jimp = require('jimp');
const path = require('path');

// Konfigurasi face-api untuk menggunakan canvas sebagai backend
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// Fungsi untuk memuat model deteksi wajah
async function loadModels() {
    const modelPath = path.join(__dirname, 'models'); // Ganti dengan folder model kamu
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
}

// Fungsi untuk mendeteksi wajah dan menghitamkan area wajah pada gambar
async function blackenFaces(imagePath) {
    await loadModels(); // Muat model sebelum deteksi wajah
    
    const image = await canvas.loadImage(imagePath); // Memuat gambar dengan canvas
    const detections = await faceapi.detectAllFaces(image); // Deteksi semua wajah

    // Baca gambar dengan Jimp untuk modifikasi warna
    const jimpImage = await Jimp.read(imagePath);

    // Iterasi setiap deteksi wajah dan hitamkan area wajah
    for (const detection of detections) {
        const { x, y, width, height } = detection.box;

        // Hitamkan area wajah menggunakan Jimp
        jimpImage.scan(x, y, width, height, (x, y, idx) => {
            jimpImage.bitmap.data[idx + 0] = 0; // Red channel
            jimpImage.bitmap.data[idx + 1] = 0; // Green channel
            jimpImage.bitmap.data[idx + 2] = 0; // Blue channel
        });
    }

    const outputPath = path.join(__dirname, 'output.jpg'); // Path untuk menyimpan gambar hasil
    await jimpImage.writeAsync(outputPath);

    return outputPath; // Mengembalikan path gambar hasil
}

module.exports = { blackenFaces };