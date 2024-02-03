# Vite Proje İçin Adımlar

- `npm create vite klasör_ismi` > ye belittiğimiz klasörü oluştuurup içerine react projesi oluştuturur

- `npm create vite .` > bulunduğummuz klasör içerisine içerine react projesi oluştuturur

- `npm install` > node modules indirme

- `npm run dev` > projeyi ayağa kaldırma

# Vite Artıları

- Proje oluşturma / Proje yaağa kaldırma gibi işlemleri vite ile çok daha hızlı gerçekleştirebiliyoruz

- Gereksiz kodlardan/dosyalardan arındırlmış bir react projei oluşturur

- Build işlemei çok daha hızlı.

# Değişenler

- App.js ve index.js' in yerini App.jsx ve main.jsx aldı.

- Projeyi ayağa kaldırırken `npm start` yerine `npm run dev`

# JSON-SERVER

- Kendi bilgisayarımızda çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için basit yazdığımız uygulamların backend ihtiyacını karşılar

- Hızlı Protoipleme: Backend dev. api'ı oluşturduğu süreçte uygulamanın temel özelliklerini geliştrebilmek adına geçici bir süre kullanılabilir.

- Json-Server ile oluşturdğumuz api'a bütün http methodları istek atabiliriz.

- Yaptığımız isteksonunda eğer verilerde bir değişim olursa anlık olarak db.json'da güncellenir

# Kurulum

- npm i json-server
- db.json dosyası oluştur ve düzenle
- packe.json'a server'ı ayağa kaldırma komutu yaz
- komut'u çalıştır

# CRUD (Create Read Update Delete)

- Oluşturma Okuma Düzenleme Silme işlmleri

# Axios

- HTTP istekleri için modern çözüm
- Yerleşik değil pakedin indirrmek gerekli
- npm i axios
- isteklerde fetche göre daha az kod yazarız
- hataları daha detaylı bir şekilde gösterir
- alınan veri için .json() methodu ile yaptığımız fomatlama işlemini otamatik olarak yürütür
- veri gönderirken otomaik olar stringify yapar ve veriyi otomatyik olark body kısmına ekler

## Get Karşılaştırma

### Fetch

`    fetch('http://localhost:3030/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));`

### Axios

`    axios
      .get('http://localhost:3030/todos')
      .then((res) => setTodos(res.data));`

## POST Karşılaştırma

### Fetch

`    fetch('http://localhost:3030/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    })`

### Axios

`    axios.post('http://localhost:3030/todos', newTodo)`

## Delete Karşılaştırma

### Fetch

`fetch('http://localhost:3030/todos/4',{
      method:"DELETE"
})`

### Axios

### CRUD ( CREATE READ UPDATE DELETE)

# reactCrud
