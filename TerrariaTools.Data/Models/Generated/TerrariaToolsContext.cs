using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace TerrariaTools.Data.Models.Generated;

public partial class TerrariaToolsContext : DbContext
{
    public TerrariaToolsContext()
    {
    }

    public TerrariaToolsContext(DbContextOptions<TerrariaToolsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CraftingStation> CraftingStations { get; set; }

    public virtual DbSet<Material> Materials { get; set; }

    public virtual DbSet<Potion> Potions { get; set; }

    public virtual DbSet<PotionCategory> PotionCategories { get; set; }

    public virtual DbSet<PotionIngredient> PotionIngredients { get; set; }

    public virtual DbSet<PotionRecipe> PotionRecipes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer(new ConfigurationBuilder().AddUserSecrets("d1490349-8531-4820-bc7a-ac0b4af3337b").Build().GetConnectionString("DefaultConnection"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CraftingStation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Crafting__3214EC076D619AEE");

            entity.ToTable("CraftingStation");

            entity.HasIndex(e => e.Name, "UQ_CraftingStation_Name").IsUnique();

            entity.Property(e => e.ImageUrl).HasMaxLength(200);
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<Material>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Material__3214EC070C80A8A0");

            entity.ToTable("Material");

            entity.HasIndex(e => e.Name, "UQ_Ingredient_Name").IsUnique();

            entity.Property(e => e.ImageUrl).HasMaxLength(200);
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<Potion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Potion__3214EC071649AF91");

            entity.ToTable("Potion");

            entity.HasIndex(e => e.Name, "UQ_Potion_Name").IsUnique();

            entity.Property(e => e.ImageUrl).HasMaxLength(200);
            entity.Property(e => e.Name).HasMaxLength(50);

            entity.HasOne(d => d.PotionCategory).WithMany(p => p.Potions)
                .HasForeignKey(d => d.PotionCategoryId)
                .HasConstraintName("FK_Potion_PotionCategoryId");
        });

        modelBuilder.Entity<PotionCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PotionCa__3214EC07D5A3AD4D");

            entity.ToTable("PotionCategory");

            entity.HasIndex(e => e.Label, "UQ_PotionCategory_Label").IsUnique();

            entity.Property(e => e.Label).HasMaxLength(50);
        });

        modelBuilder.Entity<PotionIngredient>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PotionIn__3214EC075B6E050B");

            entity.ToTable("PotionIngredient");

            entity.HasOne(d => d.Ingredient).WithMany(p => p.PotionIngredients)
                .HasForeignKey(d => d.IngredientId)
                .HasConstraintName("FK_PotionIngredient_IngredientId");

            entity.HasOne(d => d.Potion).WithMany(p => p.PotionIngredients)
                .HasForeignKey(d => d.PotionId)
                .HasConstraintName("FK_PotionIngredient_PotionId");

            entity.HasOne(d => d.PotionRecipe).WithMany(p => p.PotionIngredients)
                .HasForeignKey(d => d.PotionRecipeId)
                .HasConstraintName("FK_PotionIngredient_PotionRecipeId");
        });

        modelBuilder.Entity<PotionRecipe>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PotionRe__3214EC07BDE9A9B5");

            entity.ToTable("PotionRecipe");

            entity.HasOne(d => d.CraftingStation).WithMany(p => p.PotionRecipes)
                .HasForeignKey(d => d.CraftingStationId)
                .HasConstraintName("FK_PotionRecipe_CraftingStationId");

            entity.HasOne(d => d.Potion).WithMany(p => p.PotionRecipes)
                .HasForeignKey(d => d.PotionId)
                .HasConstraintName("FK_PotionRecipe_PotionId");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
