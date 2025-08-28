"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ArvoreComFolhas() {
  const canvasRef = useRef(null);
  const [folhas, setFolhas] = useState([]);
  const [folhaSelecionada, setFolhaSelecionada] = useState(null);
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });

  function isBrancoOuTransparente(r, g, b, a) {
    const tolerancia = 10;
    const isBranco =
      Math.abs(r - 255) <= tolerancia &&
      Math.abs(g - 255) <= tolerancia &&
      Math.abs(b - 255) <= tolerancia;
    const isTransparente = a < 10;
    return isBranco || isTransparente;
  }

  useEffect(() => {
    const img = new window.Image();
  img.src = "/assets/tree.png";
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // Simular dados vindos do banco
      const folhasBanco = [
        { autor: "Ana", descricao: "Folha saudável" },
        { autor: "Bruno", descricao: "Folha amarelada" },
        { autor: "Carlos", descricao: "Folha caída" },
        { autor: "Duda", descricao: "Folha nova" },
        { autor: "Eva", descricao: "Folha antiga" },
        { autor: "Fábio", descricao: "Folha com gota de orvalho" },
        { autor: "Gabi", descricao: "Folha com marca de inseto" },
        { autor: "Hugo", descricao: "Folha brilhante" },
        { autor: "Iara", descricao: "Folha opaca" },
        { autor: "João", descricao: "Folha com sombra" },
        { autor: "Karla", descricao: "Folha com textura" },
        { autor: "Léo", descricao: "Folha molhada" },
        { autor: "Mia", descricao: "Folha seca" },
        { autor: "Nina", descricao: "Folha com nervuras" },
        { autor: "Otto", descricao: "Folha grande" },
        { autor: "Pia", descricao: "Folha pequena" },
        { autor: "Quico", descricao: "Folha com manchas" },
        { autor: "Rafa", descricao: "Folha com borda irregular" },
        { autor: "Sofia", descricao: "Folha com brilho" }
      ];
      const posicoesPossiveis = [];
      for (let y = 0; y < canvas.height - 420; y += 30) {
        for (let x = 0; x < canvas.width; x += 10) {
          const index = (y * canvas.width + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const a = pixels[index + 3];
          if (!isBrancoOuTransparente(r, g, b, a)) {
            posicoesPossiveis.push({ x, y });
            x += 70;
            y += 1;
          }
        }
      }
      const folhasComDados = posicoesPossiveis.slice(0, folhasBanco.length).map((pos, i) => ({
        ...pos,
        autor: folhasBanco[i].autor,
        descricao: folhasBanco[i].descricao
      }));
      setFolhas(folhasComDados);
    };
  }, []);

  useEffect(() => {
    const img = new window.Image();
  img.src = "/assets/tree.png";
    img.onload = () => setImgSize({ w: img.width, h: img.height });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: imgSize.w || 1,
        height: imgSize.h || 1,
        margin: "0 auto",
      }}
    >
      {/* Árvore */}
      <img
        src="/assets/tree.png"
        alt="Árvore"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Folhas */}
      {folhas.map((f, i) => (
        <React.Fragment key={i}>
          <img
            src="/assets/leaf.png"
            alt="Folha"
            title={`Autor: ${f.autor}`}
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              left: f.x - 8,
              top: f.y - 8,
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => setFolhaSelecionada(f)}
          />
          <span
            style={{
              position: "absolute",
              left: f.x + 20,
              top: f.y + 10,
              background: "rgba(255,255,255,0.7)",
              padding: "2px 6px",
              borderRadius: "6px",
              fontSize: "12px",
              pointerEvents: "none",
              userSelect: "none",
              fontWeight: "bold"
            }}
          >
            {f.autor}
          </span>
        </React.Fragment>
      ))}

      {/* Modal de descrição da folha */}
      {folhaSelecionada && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
          onClick={() => setFolhaSelecionada(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "32px 24px",
              minWidth: "260px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              textAlign: "center",
              position: "relative"
            }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{margin:0, marginBottom:12}}>{folhaSelecionada.autor}</h2>
            <p style={{fontSize:16, margin:0}}>{folhaSelecionada.descricao}</p>
            <button
              style={{
                marginTop: 24,
                padding: "6px 18px",
                borderRadius: "6px",
                border: "none",
                background: "#4caf50",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 15,
                cursor: "pointer"
              }}
              onClick={() => setFolhaSelecionada(null)}
            >Fechar</button>
          </div>
        </div>
      )}

      {/* Canvas escondido apenas para leitura de pixels */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}