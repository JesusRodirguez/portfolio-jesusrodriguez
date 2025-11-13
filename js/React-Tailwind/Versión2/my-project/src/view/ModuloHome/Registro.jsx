import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "../../componentes/Title";
import InPut from "../../componentes/InPut";
import Button from "../../componentes/Butomm";


const schema = yup.object().shape({
  nombre: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),
  telefono: yup
    .string()
    .required("El teléfono es obligatorio")
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(10, "Debe tener al menos 7 dígitos"),
  correo: yup
    .string()
    .required("El correo es obligatorio")
    .email("Formato de correo inválido"),
  contraseña: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(12, "Debe tener al menos 12 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Debe contener al menos un carácter especial"
    ),
});

const Registro = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    localStorage.setItem("usuarios", JSON.stringify([...usuariosGuardados, data]));

    alert(" Registrado exitosamente");
    reset(); 
    window.location.reload(); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white font-[Inter]">
      <div className="flex w-[90%] max-w-5xl h-[70vh] shadow-lg">
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <div className="w-[80%] max-w-sm text-center">
            <h2 className="text-3xl font-bold text-[#7C3AED] mb-2">MidnightCode</h2>
            <Title texto="Registro" ClassName="text-2xl font-semibold mb-2 text-[#7C3AED]" />
            <p className="text-sm text-gray-500 mb-6">
              Crea tu cuenta para unirte a la experiencia
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Nombre */}
              <div>
                <InPut
                  type="text"
                  placeholder="Nombre completo"
                  {...register("nombre")}
                  className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <InPut
                  type="tel"
                  placeholder="Teléfono"
                  {...register("telefono")}
                  className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>
                )}
              </div>

              {/* Correo */}
              <div>
                <InPut
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("correo")}
                  className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
                />
                {errors.correo && (
                  <p className="text-red-500 text-xs mt-1">{errors.correo.message}</p>
                )}
              </div>

              {/* Contraseña */}
              <div>
                <InPut
                  type="password"
                  placeholder="Contraseña"
                  {...register("contraseña")}
                  className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
                />
                {errors.contraseña && (
                  <p className="text-red-500 text-xs mt-1">{errors.contraseña.message}</p>
                )}
              </div>

              {/* Botón */}
              <Button
                texto="Registrarme"
                type="submit"
                ClassName="w-full bg-[#7C3AED] text-white text-lg font-semibold py-2 hover:bg-[#6D28D9] transition-all cursor-pointer"
              />
            </form>
          </div>
        </div>

        {/* Imagen lateral */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('public/img/fondo.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Registro;
