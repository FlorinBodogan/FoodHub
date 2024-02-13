using AutoMapper;
using BACKEND.DTOs.Account;
using BACKEND.Entities;

namespace BACKEND.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // Mapping for User registration
            CreateMap<RegisterDto, User>();
        }
    }
}