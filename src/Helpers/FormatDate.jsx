//  tarihi alır ve geriye  ay / gün formatında döndürür
const formatDate = (dateStr) => {
  // metin formatyındaki tarihi aralardaki - ye göre paraçalara ayırdık
  const date = dateStr.split("/");

  // formatlayıp döndür
  return date[0] + "/" + date[1];
};

export default formatDate;
