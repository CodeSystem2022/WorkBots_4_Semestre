package UTN.datos;

import UTN.dominio.Estudiante;
import UTN.conexion.Conexion;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class EstudianteDAO {
    // Método listar
    public List<Estudiante> listarEstudiantes() {
        List<Estudiante> estudiantes = new ArrayList<>();
        PreparedStatement ps;
        ResultSet rs;
        Connection con = Conexion.getConnection();
        String sql = "SELECT * FROM estudiantes2023 ORDER BY idestudiantes2023";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                Estudiante estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2023"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                // Set other properties of the student
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion: " + e.getMessage());
            }
        }
        return estudiantes;
    }

    // Método buscarEstudiantePorId
    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection con = null;
        try {
            con = Conexion.getConnection();
            String sql = "SELECT * FROM estudiantes2023 WHERE idestudiantes2023=?";
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; // Se encontró un registro
            }
        } catch (SQLException e) {
            System.out.println("Ocurrió un error al buscar estudiante: " + e.getMessage());
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        }
        return false;
    }
    //Agregar estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = Conexion.getConnection();
        String sql= "INSERT INTO estudiantes2023 (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";
        try {
            ps=con.prepareStatement(sql);
            ps.setString(1,estudiante.getNombre());
            ps.setString(2,estudiante.getApellido());
            ps.setString(3,estudiante.getTelefono());
            ps.setString(4,estudiante.getEmail());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrio un error al agregar el estudiante: "+e.getMessage());
        }
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la conexion: "+e.getMessage());
            }
        }
        return false;
    }//Fin del metodo agregar

    //Modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = Conexion.getConnection();
        String sql= "UPDATE estudiantes2023 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2023=?";
        try{
            ps= con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrio un error al modificar estudiante: "+e.getMessage());
        }//Fin catch
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Error al cerrar la conexion");
            }//Fin cath
        }//Fin finally
        return false;
    }
    //Metodo eliminar estudiante
    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con= Conexion.getConnection();
        String sql="DELETE FROM estudiantes2023 WHERE idestudiantes2023=?";
        try{
            ps=con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrio un error al borrar estudiante: "+e.getMessage());
        }
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la conexion: "+e.getMessage());
            }
        }
        return false;
    }



    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();
        // Listar los estudiantes
        System.out.println("Listado de estudiantes:");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);

        //Eliminar estudiante con id
      //  var estudianteEliminar=new Estudiante(3);
       // var eliminado=estudianteDao.eliminarEstudiante(estudianteEliminar);
       // if(eliminado)
         //   System.out.println("Estudiante eliminado: "+estudianteEliminar);
        //else
          //  System.out.println("No se elimino el estudiante: "+estudianteEliminar);

        //Modificar estudiante
      // var estudianteModificado =new Estudiante(1,"Juan Carlos", "Juarez", "45454","jcj@gamil.com");
      //  var modificado= estudianteDao.modificarEstudiante(estudianteModificado);
      //  if (modificado){
        //    System.out.println("Estudiante modificado: "+estudianteModificado);
       // }else
         //   System.out.println("Error al modificar estudiante: "+estudianteModificado);
        //agregar estudiante
      //  var nuevoEstudiante=new Estudiante("Carlos","Lara","5456465","lara@akads.com");
       // var agregado=estudianteDao.agregarEstudiante(nuevoEstudiante);
      //  if(agregado)
      //      System.out.println("Estudiante agregado: "+nuevoEstudiante);
     //   else
      //      System.out.println("No se a agregado estudiante: "+nuevoEstudiante);
        // Buscar por id
        //var estudiante1 = new Estudiante(1);
        //var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
       // if (encontrado) {
        //    System.out.println("Estudiante encontrado: " + estudiante1);
      //  } else {
        //    System.out.println("No se encontró el estudiante: " + estudiante1.getIdEstudiante());
       // }

    }
}
//video 9 clase 12 tercer cuatrimestre