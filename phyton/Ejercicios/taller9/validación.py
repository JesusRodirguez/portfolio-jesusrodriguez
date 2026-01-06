while True:
    print("""===============================
1. Calcular
2. Salir
===============================""")
    
    try:
        respuesta = int(input(": "))
    except ValueError:
        print("Ingrese un número válido")
        continue

    match respuesta:
        case 1:
            print("""===============================
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
===============================""")
            
            try:
                op = int(input(": "))
            except ValueError:
                print("Número inválido")
                continue

            match op:
                case 1:
                    print("SUMA")
                case 2:
                    print("RESTA")
                case 3:
                    print("MULTIPLICAR")
                case 4:
                    print("DIVIDIR")
                case _:
                    print("Opción no válida")

        case 2:
            print("Fin del programa")
            break

        case _:
            print("Opción incorrecta")
