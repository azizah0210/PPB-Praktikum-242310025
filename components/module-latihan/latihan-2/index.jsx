import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Praktikum2 = () => {

  const dataDiri = {
    nama: "Achmad Zakaria",
    berat: 50,
    tinggi: 160
  };

  const makanan = [
    { waktu: "Sarapan", kalori: 300 },
    { waktu: "Makan Siang", kalori: 500 },
    { waktu: "Makan Malam", kalori: 400 }
  ];

  let totalKalori = 0;
  makanan.forEach(item => {
    totalKalori += item.kalori;
  });

  const tinggiMeter = dataDiri.tinggi / 100;
  const bmi = dataDiri.berat / (tinggiMeter * tinggiMeter);

  let statusBMI = "";
  if (bmi < 18.5) {
    statusBMI = "Kurus";
  } else if (bmi <= 24.9) {
    statusBMI = "Ideal";
  } else {
    statusBMI = "Berlebih";
  }

  let statusKalori = "";
  if (totalKalori < 2000) {
    statusKalori = "Kurang";
  } else if (totalKalori <= 2500) {
    statusKalori = "Cukup";
  } else {
    statusKalori = "Berlebih";
  }

  let kesimpulan =
    statusBMI === "Ideal" && statusKalori === "Cukup"
      ? "Seimbang 👍"
      : "Berat badan sudah ideal,tetapi asupan kalori kurang";

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Evaluasi Berat Badan Ideal</Text>

      <Text style={styles.subtitle}>Pasien</Text>

      <Text>Nama: {dataDiri.nama}</Text>
      <Text>Berat: {dataDiri.berat} kg</Text>
      <Text>Tinggi: {dataDiri.tinggi} cm</Text>

      <Text style={styles.subtitle}>Porsi Makanan Harian:</Text>
      {makanan.map((item, index) => (
        <Text key={index}>
          {item.waktu} - {item.kalori} kalori
        </Text>
      ))}

      <Text>Total Kalori: {totalKalori}</Text>

      <Text style={styles.subtitle}>Hasil Perhitungan:</Text>
      <Text>BMI: {bmi.toFixed(2)}</Text>
      <Text>Status BMI: {statusBMI}</Text>
      <Text>Status Kalori: {statusKalori}</Text>

      <Text style={styles.result}>{kesimpulan}</Text>
    </View>
  );
};

export default Praktikum2;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { marginTop: 10, fontWeight: "bold" },
  result: { marginTop: 10, fontWeight: "bold" }
});