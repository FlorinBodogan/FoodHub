using System.ComponentModel.DataAnnotations;

namespace BACKEND.DTOs.Account
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 6)]
        public string Password { get; set; }
    }
}