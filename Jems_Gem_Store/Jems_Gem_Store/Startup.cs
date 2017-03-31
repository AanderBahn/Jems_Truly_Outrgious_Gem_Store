using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Jems_Gem_Store.Startup))]
namespace Jems_Gem_Store
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
