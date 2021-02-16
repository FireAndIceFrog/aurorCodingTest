using Xunit;
using interpolater;

using System.Collections.Generic;
namespace Prime.UnitTests.Services
{
    public class UnitTests
    {
        private Program program;

        public UnitTests()
        {
            this.program = new Program();
        }

        [Fact]
        public void Can_ReplaceName()
        {
            Assert.Equal("Hello Jim", this.program.Interpolate("Hello [name]", new Dictionary<string, string>{{"name", "Jim"}}));
        }
        
        [Fact]
        public void Dont_ReplaceValue()
        {
            Assert.Equal("Hello Jim [author]", this.program.Interpolate("Hello [name] [[author]]", new Dictionary<string, string>{{"name", "Jim"}}));
        }
    }
}