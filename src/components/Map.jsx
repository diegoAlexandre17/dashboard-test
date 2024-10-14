const Map = () => {
  return (
    <div className="d-flex justify-content-center">
      <iframe
      className="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28780.994368096566!2d-54.58877579319041!3d-25.617397809064645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6923af74e96dd%3A0xb4b8eeda942aae07!2sPuerto%20Iguaz%C3%BA%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1728923056541!5m2!1ses-419!2sar"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
