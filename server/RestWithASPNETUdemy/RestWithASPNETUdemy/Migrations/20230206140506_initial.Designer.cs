﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RestWithASPNETUdemy.Model.Context;

#nullable disable

namespace RestWithASPNETUdemy.Migrations
{
    [DbContext(typeof(MySQLContext))]
    [Migration("20230206140506_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("RestWithASPNETUdemy.Model.Book", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasColumnName("id");

                    b.Property<string>("Author")
                        .HasColumnType("longtext")
                        .HasColumnName("author");

                    b.Property<DateTime>("LaunchDate")
                        .HasColumnType("datetime(6)")
                        .HasColumnName("launch_date");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)")
                        .HasColumnName("price");

                    b.Property<string>("Title")
                        .HasColumnType("longtext")
                        .HasColumnName("title");

                    b.HasKey("Id");

                    b.ToTable("books");
                });

            modelBuilder.Entity("RestWithASPNETUdemy.Model.Person", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasColumnName("id");

                    b.Property<string>("Address")
                        .HasColumnType("longtext")
                        .HasColumnName("address");

                    b.Property<bool>("Enabled")
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("enabled");

                    b.Property<string>("FirstName")
                        .HasColumnType("longtext")
                        .HasColumnName("first_name");

                    b.Property<string>("Gender")
                        .HasColumnType("longtext")
                        .HasColumnName("gender");

                    b.Property<string>("LastName")
                        .HasColumnType("longtext")
                        .HasColumnName("last_name");

                    b.HasKey("Id");

                    b.ToTable("person");
                });

            modelBuilder.Entity("RestWithASPNETUdemy.Model.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasColumnName("id");

                    b.Property<string>("FullName")
                        .HasColumnType("longtext")
                        .HasColumnName("full_name");

                    b.Property<string>("Password")
                        .HasColumnType("longtext")
                        .HasColumnName("password");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("longtext")
                        .HasColumnName("refresh_token");

                    b.Property<DateTime>("RefreshTokenExpiryTime")
                        .HasColumnType("datetime(6)")
                        .HasColumnName("refresh_token_expiry_time");

                    b.Property<string>("UserName")
                        .HasColumnType("longtext")
                        .HasColumnName("user_name");

                    b.HasKey("Id");

                    b.ToTable("users");
                });
#pragma warning restore 612, 618
        }
    }
}
