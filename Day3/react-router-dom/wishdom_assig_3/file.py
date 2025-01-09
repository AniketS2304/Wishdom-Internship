import os

# Define the structure of the project
components = [
    "Navbar", "Hero", "About", "Services", "Features",
    "Testimonials", "Pricing", "Portfolio", "Team", "Contact", "Footer"
]

# Boilerplate content for the components
component_template = """
import React from 'react';

const {component_name} = () => {{
  return (
    <section id="{id_name}" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{component_name}</h2>
        <p>This is the {component_name} section.</p>
      </div>
    </section>
  );
}};

export default {component_name};
"""

# Boilerplate content for App.js
app_template = """
import React from 'react';
{imports}

const App = () => {{
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}};

export default App;
"""

# Create components directory and files
os.makedirs("src/components", exist_ok=True)

for component in components:
    file_content = component_template.format(
        component_name=component,
        id_name=component.lower()
    )
    with open(f"src/components/{component}.js", "w") as file:
        file.write(file_content.strip())

# Generate imports for App.js
imports = "\n".join(
    [f"import {comp} from './components/{comp}';" for comp in components]
)

# Create App.js
with open("src/App.js", "w") as app_file:
    app_file.write(app_template.format(imports=imports).strip())

print("React components and App.js have been created successfully!")
