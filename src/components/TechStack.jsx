import React from 'react';

const categories = [
  {
    label: 'Cloud',
    tools: ['AWS', 'GCP', 'Azure', 'DigitalOcean'],
  },
  {
    label: 'Containers',
    tools: ['Docker', 'Kubernetes', 'Helm', 'Containerd'],
  },
  {
    label: 'IaC',
    tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'],
  },
  {
    label: 'CI/CD',
    tools: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
  },
  {
    label: 'Observabilidad',
    tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
  },
  {
    label: 'Seguridad',
    tools: ['HashiCorp Vault', 'Trivy', 'Falco', 'OPA'],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Stack tecnológico</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Herramientas que dominamos
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Trabajamos con las tecnologías líderes de la industria para garantizar soluciones robustas y modernas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, tools }) => (
            <div key={label} className="glass rounded-2xl p-5">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map(t => (
                  <span
                    key={t}
                    className="text-sm text-slate-300 bg-slate-800/60 border border-slate-700/50 px-3 py-1 rounded-lg hover:border-teal-500/40 hover:text-teal-300 transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
