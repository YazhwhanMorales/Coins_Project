import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        return response.json();
      })

      .then((data) => {
        setCoins(data);

        console.log(data);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Criptomonedas
      </Typography>

      {/* Grilla CSS estricta: 4 columnas exactas e iguales en pantallas medianas/grandes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 columna en celulares
            sm: "repeat(2, 1fr)", // 2 columnas en tablets
            md: "repeat(4, 1fr)", // EXACTAMENTE 4 columnas en escritorio
          },
          gap: 3, // Espaciado simétrico entre tarjetas
        }}
      >
        {coins.map((coin) => (
          <Card
            key={coin.id}
            elevation={2}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 3,
              height: "100%", // Garantiza la misma altura en todas las tarjetas
              display: "flex",
              flexDirection: "column",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CardActionArea
              onClick={() => navigate("/detail/" + coin.id)}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="img"
                src={coin.image}
                alt={coin.name}
                sx={{
                  width: 72,
                  height: 72,
                  objectFit: "contain",
                  mx: "auto",
                  mb: 2,
                }}
              />

              <CardContent sx={{ p: 0, width: "100%" }}>
                <Typography variant="h6" fontWeight="bold" noWrap>
                  {coin.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "medium",
                    mb: 1,
                  }}
                >
                  {coin.symbol}
                </Typography>
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                  ${coin.current_price?.toLocaleString()} USD
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
};
