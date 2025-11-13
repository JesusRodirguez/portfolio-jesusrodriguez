"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Title from "@/componentes/UI/Title";
import InPut from "@/componentes/UI/InPut";
import Button from "@/componentes/UI/Button";
import "../../styles/Tailwind.css";

const schema = yup.object({
  email: yup
    .string()
    .required("El correo electrónico es obligatorio")
    .email("Debe ingresar un correo válido"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe incluir al menos una mayúscula")
    .matches(/[a-z]/, "Debe incluir al menos una minúscula")
    .matches(/[0-9]/, "Debe incluir al menos un número")
    .matches(/[@$!%*?&#]/, "Debe incluir al menos un símbolo especial (@$!%*?&#)"),
});

type FormData = yup.InferType<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data.email === "admin@midnight.com" && data.password === "Admin123@") {
      alert(" Bienvenido");
    } else {
      alert(" Credenciales incorrectas");
    }
  };

  return (
    <section
      className="relative flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/fondo-morado.jpg')" }}
    >
      <div className="absolute top-6 left-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold">MidnightCode</h1>
      </div>

      <div className="flex flex-col justify-center items-center ml-auto w-full md:w-[50%] bg-white/90 backdrop-blur-sm p-8 rounded-l-3xl shadow-2xl">
        <Title
          classNameDiv="text-center mb-6"
          classNameH1="text-4xl font-bold text-gray-900"
          textoH1="Inicia Sesión"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md flex flex-col gap-6"
        >
          {/* correo */}
          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Correo electrónico"
            type="email"
            id="email"
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:ring-4 focus:ring-purple-400 text-gray-900"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/*  Contraseña */}
          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Contraseña"
            type="password"
            id="password"
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:ring-4 focus:ring-purple-400 text-gray-900"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Botón */}
          <Button
            type="submit"
            textoButton="Entrar"
            classNameButton="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg"
          />
        </form>
      </div>
    </section>
  );
}
