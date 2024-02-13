using Microsoft.AspNetCore.Identity;

namespace BACKEND.Entities
{
    public class User : IdentityUser
    {
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public ICollection<UserRole> UserRoles { get; set; }
    }
}