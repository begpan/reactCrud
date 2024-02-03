const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="badge bg-danger">Önemli</span>;

    case "job":
      return <span className="badge bg-warning">İş</span>;

    case "daily":
      return <span className="badge bg-primary">Günlük</span>;

    default:
      return <span className="badge bg-secondary">Varsayılan</span>;
  }
};

export default getStatus;
