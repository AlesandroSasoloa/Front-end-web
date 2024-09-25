const Header = () => {
    return (
    <header className="header">
        <h1> buat header Menggunakan JSX</h1>
        <p>tutorial JSX sederhana</p>
    </header>
    );
};


const Table = () => {
    return (
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>NAMA</th>
            <th>GENDER</th>
            <th>JURUSAN</th>
            <th>NO WA</th>
            <th>ALAMAT</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Alesandro</td>
          <td>Laki-laki</td>
          <td>Sistem Informasi</td>
          <td>08xxxxx</td>
          <td>Outsider</td>
          </tr>

          <tr><td>Retno</td>
          <td>Laki-laki</td>
          <td>Sistem Informasi</td>
          <td>08xxxxx</td>
          <td>Outsider</td>
          </tr>
          <tr><td>Arlin</td>
          <td>Perempuan</td>
          <td>Sistem Informasi</td>
          <td>08xxxxx</td>
          <td>Outsider</td>
          </tr>
    
        </tbody>
      </table>
    );
  };


  const App = () => {
    return (
        <div>
            <Header/>
            <Table />
        </div>
    );
  };

  ReactDOM.render (<App />, document.getElementById('app'));