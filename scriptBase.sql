USE [BlogTestearDB]
GO
/****** Object:  Table [dbo].[Publicacion]    Script Date: 10/25/2021 11:20:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Publicacion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cabecera] [varchar](500) NOT NULL,
	[Detalle] [varchar](2500) NOT NULL,
	[FechaHora] [varchar](50) NOT NULL,
	[ClasePublicacion] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Publicacion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
