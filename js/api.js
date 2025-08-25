// const api = {
//     async buscarPensamentos() {
//         try {
//             const response = await fetch("http://localhost:3000/pensamentos");
//             return response.json();
//         }
//         catch {
//             alert("Erro ao buscar pensamentos");
//             throw error;
            
//         }
//     }
// }

// export default api;
// http://localhost:3000/pensamentos
// npm start
// api.js
// const api = {
//   // URL base única para evitar erros
//   backendUrl: 'https://3000-idx-matrizes-1728833291366.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',

const URL_BASE = {
    // URL base única para evitar erros
    backendUrl: 'https://3000-idx-matrizes-1728833291366.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',
  
    // Usando fetch
    // async buscarPensamentos() {
    //   try {
    //     const response = await fetch(`${this.backendUrl}/pensamentos`, {
    //       credentials: 'include' // Mantenha se necessário para autenticação
    //     });
        
    //     if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    //     return await response.json();
    //   } catch (error) {
    //     console.error("Erro ao buscar pensamentos:", error);
    //     alert("Erro ao buscar pensamentos");
    //     throw error;
    //   }
    // },

    // https://www.npmjs.com/package/axios
    async buscarPensamentos() {
      try {
        const response = await axios.get(`${this.backendUrl}/pensamentos`, {
          withCredentials: true // o equivalente ao fetch { credentials: 'include' }
        });
    
        return response.data; // axios já retorna o JSON aqui
      } catch (error) {
        console.error("Erro ao buscar pensamentos:", error);
        alert("Erro ao buscar pensamentos");
        throw error;
      }
    },
    
  
    async salvarPensamento(pensamento) {
      try {
        const response = await axios.post(
          `${this.backendUrl}/pensamentos`,
          pensamento,
          { withCredentials: true } // mantém cookies/session
        );
    
        return response.data; // axios já retorna o JSON
      } catch (error) {
        console.error("Erro ao salvar pensamento:", error);
        alert("Erro ao salvar pensamento");
        throw error;
      }
    },
    

    // URL base única para evitar erros
    // backendUrl: 'https://3000-idx-matrizes-1728833291366.cluster-4xpux6pqdzhrktbhjf2cumyqtg.cloudworkstations.dev',
  
    // async buscarPensamentoPorId(id) {
    //   try {
    //     const response = await fetch(`${this.backendUrl}/pensamentos/${id}`, {
    //       credentials: 'include' // Mantenha se necessário para autenticação
    //     });
        
    //     if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    //     return await response.json();
    //   } catch (error) {
    //     console.error("Erro ao buscar pensamentos:", error);
    //     alert("Erro ao buscar pensamentos");
    //     throw error;
    //   }
    // },
    async buscarPensamentoPorId(id) {
      try {
        const response = await axios.get(`${this.backendUrl}/pensamentos/${id}`, {
          withCredentials: true // aqui é o correto para axios
        });
    
        return response.data; // axios já retorna JSON
      } catch (error) {
        console.error("Erro ao buscar pensamento:", error);
        alert("Erro ao buscar pensamento");
        throw error;
      }
    },
    

    async editarPensamento(pensamento) {
      try {
        const response = await axios.put(
          `${this.backendUrl}/pensamentos/${pensamento.id}`,
          pensamento,
          { withCredentials: true }
        );
    
        return response.data;
      } catch (error) {
        console.error("Erro ao editar pensamento:", error);
        alert("Erro ao editar pensamento");
        throw error;
      }
    },
    

    async excluirPensamento(id) {
      try {
        await axios.delete(`${this.backendUrl}/pensamentos/${id}`, {
          withCredentials: true
        });
    
        // Se chegou até aqui, foi sucesso (200 ou 204).
        return { sucesso: true };
      } catch (error) {
        console.error("Erro ao excluir pensamento:", error);
        alert("Erro ao excluir pensamento");
        throw error;
      }
    },

  };
  
  export default URL_BASE;
  