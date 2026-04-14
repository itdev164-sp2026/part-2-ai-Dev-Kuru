export default function SettingsPage() {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="max-w-2xl text-muted-foreground">
          Preferences, account options, and workspace controls belong here.
        </p>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Add theme, profile, and application settings in this area.
        </p>
      </div>
    </section>
  );
}