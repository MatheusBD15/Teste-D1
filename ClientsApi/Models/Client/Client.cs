using System.ComponentModel.DataAnnotations;

namespace ClientsApi.Models
{
    public class Client
    {
        public long Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Cpf { get; set; }

        [Required]
        public string? Rg { get; set; }

        [Required]
        public string? BirthDate { get; set; }

        public string? Facebook { get; set; }
        public string? Linkedin { get; set; }
        public string? Twitter { get; set; }
        public string? Instagram { get; set; }

        [Required, MinLength(1)]
        public List<Cellphone>? Cellphones { get; set; }

        [Required, MinLength(1)]
        public List<Address>? Addresses { get; set; }
    }
}