import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const MaterialForm = ({ onFormSubmit }) => {
  const [criteria, setCriteria] = useState({
    KualitasProduk: 0.227,
    KemudahanAplikasi: 0.182,
    Promo: 0.182,
    Tampilan: 0.182,
    Kepercayaan: 0.227,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 1) {
      setCriteria({ ...criteria, [name]: floatValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 flex gap-3">
      <Input
        label="Kualitas Produk"
        type="number"
        name="KualitasProduk"
        value={criteria.KualitasProduk}
        onChange={handleChange}
      />
      <Input
        label="Kemudahan Aplikasi"
        type="number"
        name="KemudahanAplikasi"
        value={criteria.KemudahanAplikasi}
        onChange={handleChange}
      />
      <Input
        label="Kepercayaan"
        type="number"
        name="Kepercayaan"
        value={criteria.Kepercayaan}
        onChange={handleChange}
      />
      <Input
        label="Promo"
        type="number"
        name="Promo"
        value={criteria.Promo}
        onChange={handleChange}
      />
      <Input
        label="Tampilan"
        type="number"
        name="Tampilan"
        value={criteria.Tampilan}
        onChange={handleChange}
      />
      <Button type="submit" className="w-full">
        Cari Material
      </Button>
    </form>
  );
};

export default MaterialForm;
