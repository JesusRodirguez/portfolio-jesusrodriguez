class persona:
    def __init__(self, nombre, edad, curso, documento):
        self.nombre = nombre
        self.edad = edad
        self.curso = curso
        self.documento = documento


class estudiante(persona):
    def __init__(self, nombre, edad, curso, documento, nota1, nota2, nota3, notafinal):
        super().__init__(nombre, edad, curso, documento)
        self.nota1 = nota1
        self.nota2 = nota2
        self.nota3 = nota3
        self.notafinal = notafinal

    def MostrarEstudiante(self):
        print("=============================")
        print(f"Nombre      :  {self.nombre}")
        print(f"Edad        :  {self.edad}")
        print(f"Curso       :  {self.curso}")
        print(f"Documento   :  {self.documento}")
        print(f"Nota 1      :  {self.nota1}")
        print(f"Nota 2      :  {self.nota2}")
        print(f"Nota 3      :  {self.nota3}")
        print(f"Nota Final  :  {self.notafinal}")
        print("=============================")

    def Calificacion(self):
        if self.notafinal >= 3.5:
            return "Aprobado"
        elif 2.5 <= self.notafinal < 3.5:
            return "Recuperación"
        else:
            return "Perdido"



Estudiantes = []


while True:
    print("=============================")
    print("1. Registrar Estudiante")
    print("2. Consultar Estudiante")
    print("3. Mostrar Promedio del Curso")
    print("4. Mostrar Mejor Estudiante")
    print("5. Salir")
    print("=============================")
    try:
        respuesta = int(input("La respuesta : "))
        if respuesta == 1:
            cuantos = int(input("¿Cuántos estudiantes quieres registrar?: "))
            for i in range(cuantos):
                nombre = input(f"Ingrese el nombre del estudiante {i+1}: ").strip()
                if not all(x.isalpha() or x.isspace() for x in nombre):
                    print("Solo debe contener letras.")
                    continue

                edad = int(input("Ingrese la edad del estudiante: "))
                if not (0 < edad <= 20):
                    print("Solo se permiten edades entre 1 y 20 años.")
                    continue

                curso = int(input("Ingrese el curso del estudiante: "))
                if not (100 <= curso <= 1200):
                    print("Solo se permiten cursos entre 100 y 1200.")
                    continue

                documento = int(input("Ingrese el documento identidad del estudiante: "))
                if not (100000000000 < documento <= 200000000000):
                    print("El documento debe tener 12 dígitos válidos.")
                    continue

                nota1 = float(input("Ingrese la primera nota del estudiante: "))
                if not (0.0 < nota1 <= 5.0):
                    print("Las notas deben estar entre 0.0 y 5.0.")
                    continue

                nota2 = float(input("Ingrese la segunda nota del estudiante: "))
                if not (0.0 < nota2 <= 5.0):
                    print("Las notas deben estar entre 0.0 y 5.0.")
                    continue

                nota3 = float(input("Ingrese la tercera nota del estudiante: "))
                if not (0.0 < nota3 <= 5.0):
                    print("Las notas deben estar entre 0.0 y 5.0.")
                    continue

                notafinal = round((nota1 + nota2 + nota3) / 3, 1)
                nuevo_estudiante = estudiante(nombre, edad, curso, documento, nota1, nota2, nota3, notafinal)
                Estudiantes.append(nuevo_estudiante)
                print(f" Estudiante {nombre} registrado correctamente.")

        elif respuesta == 2:
            if len(Estudiantes) == 0:
                print("No hay estudiantes registrados.")
                continue

            try:
                finddocumento = int(input("Dame el documento de identidad para buscar el estudiante: "))
                if not (100000000000 < finddocumento <= 200000000000):
                    print("Documento inválido (debe tener 12 dígitos).")
                    continue

                encontrado = None
                for e in Estudiantes:
                    if e.documento == finddocumento:
                        encontrado = e
                        break

                if encontrado:
                    print("\n📘 Estudiante encontrado:")
                    encontrado.MostrarEstudiante()
                else:
                    print(" No se encontró estudiante con ese documento.")
            except ValueError:
                print("Solo se permiten números en el documento.")
                continue

        elif respuesta == 3:
            if len(Estudiantes) == 0:
                print("No hay estudiantes registrados aún.")
                continue

            suma_notas = 0
            aprobados = 0
            recuperacion = 0
            perdidos = 0

            for e in Estudiantes:
                estado = e.Calificacion()
                suma_notas += e.notafinal
                if estado == "Aprobado":
                    aprobados += 1
                elif estado == "Recuperación":
                    recuperacion += 1
                else:
                    perdidos += 1

            promedioGeneral = round(suma_notas / len(Estudiantes), 2)
            print("================================================")
            print(" RESULTADOS GENERALES ")
            print(f" Promedio general del aula : {promedioGeneral}")
            print(f" Aprobados                 : {aprobados}")
            print(f" Recuperación              : {recuperacion}")
            print(f" Perdidos                  : {perdidos}")
            print("================================================")

        elif respuesta == 4:
            if len(Estudiantes) == 0:
                print("No hay estudiantes registrados aún.")
                continue

            mejor = max(Estudiantes, key=lambda x: x.notafinal)
            print("\n Mejor Estudiante del curso:")
            print("-----------------------------------")
            print(f"Nombre     : {mejor.nombre}")
            print(f"Documento  : {mejor.documento}")
            print(f"Nota Final : {mejor.notafinal}")
            print("-----------------------------------")

        elif respuesta == 5:
            print(" Hasta luego, mi brother.")
            break
        else:
            print("Opción no válida, intenta de nuevo.")

    except ValueError:
        print("Solo se permiten números.")
        continue
