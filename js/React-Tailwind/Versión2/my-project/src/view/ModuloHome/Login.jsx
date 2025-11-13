import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Title from "../../componentes/Title";
import InPut from "../../componentes/InPut";
import Button from "../../componentes/Butomm";


const schema = yup.object().shape({
  correo: yup
    .string()
    .email("El formato del correo no es válido")
    .required("Es obligatorio el correo"),
  contraseña: yup
    .string()
    .min(5, "La contraseña debe tener mínimo 5 caracteres")
    .required("Es obligatorio la contraseña"),
});

const Login = () => {
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    const correo = data.correo.trim();
    const contraseña = data.contraseña.trim();

    if (correo === "usuario@gmail.com" && contraseña === "12345") {
      navigate("/pagina-principal");
    } else if (correo === "admin@gmail.com" && contraseña === "12345") {
      navigate("/PaginaPrincipalAdministrador");
    } else if (correo === "empleado@gmail.com" && contraseña === "12345") {
      navigate("/PaginaPrincipalEmpleado");
    } else {
      alert("Credenciales incorrectas, vuelve a intentar");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white font-[Inter]">
      <div className="flex w-[90%] max-w-5xl h-[70vh] shadow-lg">
        {/* Lado izquierdo (formulario) */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <div className="w-[80%] max-w-sm text-center">
            <h2 className="text-3xl font-bold text-[#7C3AED] mb-2">MidnightCode</h2>
            <Title texto="Iniciar Sesión" ClassName="text-2xl font-semibold mb-2 text-[#7C3AED]" />
            <p className="text-sm text-gray-500 mb-6">
              Ingresa tus credenciales para continuar
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Campo correo */}
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

              {/* Campo contraseña */}
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

              <div className="flex justify-between text-xs text-gray-500">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input type="checkbox" className="accent-[#7C3AED]" />
                  <span>Recordarme</span>
                </label>
                <p className="hover:underline cursor-pointer">¿Olvidaste tu contraseña?</p>
              </div>

              <Button
                texto="Iniciar Sesión"
                type="submit"
                ClassName="w-full bg-[#7C3AED] text-white font-medium py-2 hover:bg-[#6D28D9] transition-all cursor-pointer"
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

export default Login;
