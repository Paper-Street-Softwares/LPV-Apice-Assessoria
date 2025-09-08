/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { User, Phone, Mail, Globe, MessageCircle } from "lucide-react";

import emailjs from "@emailjs/browser";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [placa, setPlaca] = useState("");
  const [uf, setUf] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const handleUfChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s-]/g, ""); // Permite apenas letras, espaços e hífens
    setUf(capitalizeFirstLetter(onlyLetters));
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setPhone(formatPhoneNumber(input));
  };

  const sendToWhatsapp = async () => {
    setIsSubmitting(true);

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "O campo Nome é obrigatório.";
    } else if (!validateName(name)) {
      validationErrors.name = "Nome inválido.";
    }

    if (!phone) {
      validationErrors.phone = "O campo Telefone é obrigatório.";
    } else if (!validatePhone(phone)) {
      validationErrors.phone = "Número inválido.";
    }

    // ⚠️ Antes validava email, mas agora usamos placa
    if (!placa) {
      validationErrors.placa =
        "O campo Placa ou Número do processo é obrigatório.";
    }
    // else if (!validateEmail(email)) {
    //   validationErrors.email = "E-mail inválido.";
    // }

    if (uf && !validateUf(uf)) {
      validationErrors.uf = "Cidade e Estado inválido.";
    }

    if (message && !validateMessage(message)) {
      validationErrors.message = "Mensagem inválida.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // const templateParams = {
    //   to_name: name,
    //   name,
    //   phone,
    //   email,
    //   uf,
    //   to_email: email,
    //   message,
    // };

    // try {
    //   const response = await emailjs.send(
    //     "service_79yzhx9",
    //     "template_mhpelei",
    //     templateParams,
    //     "HhY_ngFZdJ35Ugc0H"
    //   );
    //   console.log(
    //     "Mensagem enviada com sucesso:",
    //     response.status,
    //     response.text
    //   );

    //   setName("");
    //   setPhone("");
    //   setEmail("");
    //   setUf("");
    //   setMessage("");
    //   setIsSubmitting(false);
    //   alert(
    //     "Recebemos os seus dados com sucesso! Em breve nossa equipe entrará em contato. Obrigado!"
    //   );
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Erro ao enviar o e-mail:", error);
    //   alert("Houve um erro ao enviar o e-mail. Tente novamente.");
    //   setIsSubmitting(false);
    // }

    const companyNumber = "5544999067933"; // 55 + DDD + número
    const text = `Olá, meu nome é 
    ${name}
    WhatsApp: ${phone}
    Placa/Nº do processo: ${placa}`;

    // Abre WhatsApp
    window.open(
      `https://wa.me/${companyNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setIsSubmitting(false);
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return namePattern.test(name.trim());
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedPhone.length >= 10; // Pelo menos 10 dígitos
  };

  // const validateEmail = (email) => {
  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   return emailPattern.test(email.trim());
  // };

  const validateUf = (uf) => {
    return uf.trim().length >= 5; // Requer ao menos 5 caracteres para Cidade e Estado
  };

  const validateMessage = (message) => !!message;

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, ""); // Remove tudo que não for número

    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11); // Limita a 11 dígitos

    // Formatação dinâmica conforme o número é digitado
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
        6
      )}`;
    }
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  };

  return (
    <div className=" bg-primary p-6 rounded-[10px] w-full desktop1:w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4 ">
        {/* <h1 className="w-full mb-2 font-medium text-colorWhite">Fale conosco</h1> */}
        {/* Nome */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <User />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        {/* Telefone */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <Phone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              required
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        {/* Placa ou Número do Processo */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-car-icon lucide-car"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="email"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="Placa ou Número do processo"
              required
            />
          </div>
          {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}
        </div>
        {/* Cidade/Estado */}
        {/* <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <Globe />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="uf"
              value={uf}
              onChange={handleUfChange}
              placeholder="Cidade e Estado"
              required
            />
          </div>
          {errors.uf && <p className="text-red-500">{errors.uf}</p>}
        </div> */}
        {/* Mensagem */}
        {/* <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-start justify-center w-12 px-1 bg-bgSectionLight">
              <MessageCircle className="mt-[14px]" />
            </div>
            <textarea
              className="w-full px-1 py-2 border-0 rounded-none"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div> */}
        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-primary bg-buttonColor transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToWhatsapp}
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="WhatsApp Icon"
            />
            <p>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
