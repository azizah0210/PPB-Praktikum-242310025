import {Image,StyleSheet,Text,TextInput,TouchableOpacity,ScrollView, View,}
 from "react-native";

const Index = () => {
  const Biodata = {
    nama: "Anton Sukamto",
    nim: "2323100",
    alamat: "Bogor",
    email: "anton@gmail.com",
    noTelp: "08122111",
    umur: 50,
    isMahasiswa: true,
    hobi: ["Membaca", "Coding", "Gaming"],
    pendidikan: {
      kampus: "Universitas Gunadarma",
      jurusan: "Teknologi Informasi",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        {
        <Image
          style={styles.img}
          source={require("../../../assets/avatar/profile.jpg")}
        />}

        {
        <Text style={styles.title}>
          Nama: {Biodata.nama}
        </Text>}

        {
        <Text style={styles.subtitle}>
          NIM: {Biodata.nim}
        </Text>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Phone</Text>
          <TextInput value={Biodata.noTelp} style={styles.input} editable={false} />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={Biodata.email} style={styles.input} editable={false} />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput value={Biodata.alamat} style={styles.input} editable={false} />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Umur</Text>
          <TextInput value={Biodata.umur.toString()} style={styles.input} editable={false} />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Status Mahasiswa</Text>
          <TextInput
            value={Biodata.isMahasiswa ? "Ya" : "Tidak"}
            style={styles.input}
            editable={false}
          />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Hobi</Text>
          <TextInput
            value={Biodata.hobi.join(", ")}
            style={styles.input}
            editable={false}
          />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Kampus</Text>
          <TextInput
            value={Biodata.pendidikan.kampus}
            style={styles.input}
            editable={false}
          />
        </View>}

        {
        <View style={styles.card}>
          <Text style={styles.label}>Jurusan</Text>
          <TextInput
            value={Biodata.pendidikan.jurusan}
            style={styles.input}
            editable={false}
          />
        </View>}

        {
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>}

      </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
  scroll: {
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    width: "90%",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "black",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  label: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0ea6d0",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Index;