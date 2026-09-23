import React from 'react';

const categories = [
  { label: 'Cloud',          tools: ['AWS', 'GCP', 'Azure', 'DigitalOcean']                    },
  { label: 'Containers',     tools: ['Docker', 'Kubernetes', 'Helm', 'Containerd']              },
  { label: 'IaC',            tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation']        },
  { label: 'CI / CD',        tools: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD']        },
  { label: 'Observabilidad', tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger']            },
  { label: 'Seguridad',      tools: ['HashiCorp Vault', 'Trivy', 'Falco', 'OPA']               },
];

export default function TechStack() {
  return (
    <section id="stack" className="section-pad" style={{ backgroundColor: '#012624' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Stack tecnológico</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, maxWidth: '480px' }}>
            Herramientas que dominamos
          </h2>
        </div>

        <div className="grid-auto">
          {categories.map(({ label, tools }) => (
            <div key={label} className="card" style={{ padding: '32px 36px' }}>
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '20px' }}>{label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tools.map(t => (
                  <span key={t} style={{ fontSize: '16px', fontWeight: 500, color: '#edfffe', letterSpacing: '-0.005em' }}>
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
