import React from 'react';
import { render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe('App main component', () => {

    describe('When I open the app', () => {
        it('should show the bank name', () => {
            render(<App />);

            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });

        it('should show the balance', () => {
            render(<App />);

            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });

        it('should show the button to submit a new transaction', () => {
            render(<App />);

            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });
    });

});