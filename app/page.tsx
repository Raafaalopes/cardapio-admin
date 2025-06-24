"use client";

import { useState } from "react";

type Cardapio = {
  id: number;
  diaSemana: string;
  tipo: string;
  pratoPrincipal: string;
  acompanhamento: string;
};

export default function Page() {
  const [form, setForm] = useState({
    id: 0, // 0 indica cadastro novo, id > 0 edição
    tipo: "padrao",
    pratoPrincipal: "",
    acompanhamento: "",
    diaSemana: "segunda",
  });

  const [cardapios, setCardapios] = useState<Cardapio[]>([]);
  const [carregando, setCarregando] = useState(false);

  // Carregar cardápios
  const carregarCardapios = async () => {
    setCarregando(true);
    const res = await fetch("/api/cardapios");
    const data = await res.json();
    setCardapios(data);
    setCarregando(false);
  };

  // Atualizar formulário conforme input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Cadastrar ou editar cardápio
  const handleSubmit = async () => {
    const metodo = form.id > 0 ? "PUT" : "POST";
    const url = "/api/cardapios";
    const body = JSON.stringify(form);

    await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body,
    });

    alert(form.id > 0 ? "Cardápio atualizado!" : "Cardápio cadastrado!");
    setForm({
      id: 0,
      tipo: "padrao",
      pratoPrincipal: "",
      acompanhamento: "",
      diaSemana: "segunda",
    });
    carregarCardapios();
  };

  // Preparar edição
  const editar = (cardapio: Cardapio) => {
    setForm(cardapio);
  };

  // Deletar cardápio
  const deletar = async (id: number) => {
    if (!confirm("Quer mesmo deletar este cardápio?")) return;

    await fetch(`/api/cardapios?id=${id}`, { method: "DELETE" });
    alert("Cardápio deletado!");
    carregarCardapios();
  };

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Administração do Cardápio</h1>

      {/* Formulário */}
      <section className="border p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">
          {form.id > 0 ? "Editar Cardápio" : "Cadastrar Cardápio"}
        </h2>

        <select
          name="diaSemana"
          value={form.diaSemana}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          {["segunda", "terça", "quarta", "quinta", "sexta"].map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>

        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="padrao">Padrão</option>
          <option value="vegetariano">Vegetariano</option>
        </select>

        <input
          type="text"
          name="pratoPrincipal"
          placeholder="Prato principal"
          value={form.pratoPrincipal}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="acompanhamento"
          placeholder="Acompanhamento"
          value={form.acompanhamento}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {form.id > 0 ? "Atualizar" : "Enviar"}
        </button>
      </section>

      {/* Botão para carregar cardápios */}
      <button
        onClick={carregarCardapios}
        disabled={carregando}
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        {carregando ? "Carregando..." : "Mostrar Cardápios Cadastrados"}
      </button>

      {/* Lista de cardápios */}
      <section className="space-y-4">
        {cardapios.length === 0 && <p>Nenhum cardápio carregado.</p>}

        {cardapios.map((c) => (
          <div
            key={c.id}
            className="border p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p>
                <strong>{c.diaSemana.toUpperCase()}</strong> - {c.tipo}
              </p>
              <p>Prato: {c.pratoPrincipal}</p>
              <p>Acompanhamento: {c.acompanhamento}</p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => editar(c)}
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
              >
                Editar
              </button>
              <button
                onClick={() => deletar(c.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Apagar
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
