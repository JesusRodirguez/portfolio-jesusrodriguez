<?php
abstract class Cuenta {
    protected float $saldo;

    public function __construct(float $saldoInicial = 0) {
        $this->saldo = $saldoInicial;
    }

    public function depositar(float $monto): void {
        $this->saldo += $monto;
    }

    public function getSaldo(): float {
        return $this->saldo;
    }

    abstract public function retirar(float $monto): void;
}

class CuentaCorriente extends Cuenta {
    private float $limite;

    public function __construct(float $saldoInicial = 0, float $limite = 500) {
        parent::__construct($saldoInicial);
        $this->limite = $limite;
    }

    public function retirar(float $monto): void {
        if ($this->saldo + $this->limite >= $monto) {
            $this->saldo -= $monto;
        } else {
            throw new Exception("Fondos insuficientes (corriente).");
        }
    }
}

class CuentaAhorro extends Cuenta {
    private float $tasa;

    public function __construct(float $saldoInicial = 0, float $tasa = 0.02) {
        parent::__construct($saldoInicial);
        $this->tasa = $tasa;
    }

    public function aplicarInteres(): void {
        $this->saldo += $this->saldo * $this->tasa;
    }

    public function retirar(float $monto): void {
        if ($this->saldo >= $monto) {
            $this->saldo -= $monto;
        } else {
            throw new Exception("Fondos insuficientes (ahorro).");
        }
    }
}

class Cajero {
    public function operar(Cuenta $cuenta, string $accion, float $monto = 0): void {
        switch ($accion) {
            case 'depositar':
                $cuenta->depositar($monto);
                break;
            case 'retirar':
                $cuenta->retirar($monto);
                break;
            case 'interes':
                if ($cuenta instanceof CuentaAhorro) {
                    $cuenta->aplicarInteres();
                }
                break;
            default:
                throw new Exception("Acción no válida");
        }
    }
}
?>
